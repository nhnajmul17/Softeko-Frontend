import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const studentData = await request.json();
    
    // Path to store student submission
    const filePath = path.join(process.cwd(), 'submissions', 'students.json');
    const dirPath = path.join(process.cwd(), 'submissions');
    
    // Create submissions directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    // Check if student already exists
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const existingStudent = JSON.parse(fileContent);
      
      if (existingStudent && existingStudent.email) {
        return NextResponse.json({ 
          success: false, 
          message: 'Student already registered',
          studentData: existingStudent
        }, { status: 400 });
      }
    }
    
    // Add timestamp to student data
    const studentWithTimestamp = {
      ...studentData,
      submittedAt: new Date().toISOString(),
      id: Date.now()
    };
    
    // Write single student object to file
    fs.writeFileSync(filePath, JSON.stringify(studentWithTimestamp, null, 2));
    
    return NextResponse.json({ 
      success: true, 
      message: 'Student information saved successfully',
      studentData: studentWithTimestamp
    });
    
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Error saving student information',
      error: error.message 
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'submissions', 'students.json');
    
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const studentData = JSON.parse(fileContent);
      
      // Check if studentData is not empty and has required fields
      if (studentData && studentData.email && studentData.name) {
        return NextResponse.json({ 
          success: true, 
          studentData 
        });
      }
    }
    
    return NextResponse.json({ 
      success: false, 
      message: 'No student registered yet' 
    });
    
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Error reading student information',
      error: error.message 
    }, { status: 500 });
  }
}
