import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const answersData = await request.json();
    
    // Path to store answers
    const filePath = path.join(process.cwd(), 'submissions', 'answers.json');
    const dirPath = path.join(process.cwd(), 'submissions');
    
    // Create submissions directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    // Add timestamp to answers data
    const answersWithTimestamp = {
      ...answersData,
      lastUpdated: new Date().toISOString()
    };
    
    // Write to file (overwrites existing data)
    fs.writeFileSync(filePath, JSON.stringify(answersWithTimestamp, null, 2));
    
    return NextResponse.json({ 
      success: true, 
      message: 'Answers saved successfully',
      data: answersWithTimestamp
    });
    
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Error saving answers',
      error: error.message 
    }, { status: 500 });
  }
}

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'submissions', 'answers.json');
    
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const answersData = JSON.parse(fileContent);
      
      // Check if answersData is not empty
      if (answersData && Object.keys(answersData).length > 0) {
        return NextResponse.json({ 
          success: true, 
          data: answersData 
        });
      }
    }
    
    return NextResponse.json({ 
      success: false, 
      message: 'No answers saved yet' 
    });
    
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Error reading answers',
      error: error.message 
    }, { status: 500 });
  }
}
