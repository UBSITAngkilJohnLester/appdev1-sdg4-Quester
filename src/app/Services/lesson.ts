import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Lesson {

  private lessons: any = {
    progit: {
      'intro': {
        title: 'Introduction to Programming',
        content: `Programming is the process of writing instructions that a computer can execute. 
        These instructions are written in a programming language like Python, Java, or C++. 
        At its core, programming is about problem-solving — breaking down a big problem into 
        smaller steps that a computer can understand and perform.`,
        keyPoints: [
          'Programming is writing instructions for a computer',
          'Programs are written in programming languages',
          'Programming is fundamentally about problem-solving',
          'Computers only do exactly what they are told'
        ]
      },
      'variables': {
        title: 'Variables & Data Types',
        content: `A variable is like a container that stores data. Every variable has a name 
        and a value. Data types tell the program what kind of data is being stored — 
        whether it's a number, text, or true/false value.`,
        keyPoints: [
          'Variables store data in a program',
          'int stores whole numbers like 1, 2, 3',
          'String stores text like "hello"',
          'boolean stores true or false',
          'float stores decimal numbers like 3.14'
        ]
      },
      'operators': {
        title: 'Operators',
        content: `Operators are symbols that perform operations on variables and values. 
        Arithmetic operators do math, comparison operators compare values, 
        and logical operators combine conditions.`,
        keyPoints: [
          '+ - * / are arithmetic operators',
          '== != > < are comparison operators',
          '&& || ! are logical operators',
          'Operators are used to build expressions'
        ]
      },
      'control-structures': {
        title: 'Control Structures',
        content: `Control structures let your program make decisions. The if/else statement 
        checks a condition — if it's true, one block of code runs; if it's false, 
        another block runs instead.`,
        keyPoints: [
          'if runs code only when a condition is true',
          'else runs code when the condition is false',
          'else if checks another condition',
          'Conditions use comparison operators'
        ]
      },
      'loops': {
        title: 'Loops',
        content: `Loops let you repeat a block of code multiple times without rewriting it. 
        A for loop runs a set number of times, while a while loop keeps running 
        as long as a condition is true.`,
        keyPoints: [
          'Loops repeat code automatically',
          'for loops run a set number of times',
          'while loops run until a condition is false',
          'Be careful of infinite loops'
        ]
      },
      'functions': {
        title: 'Functions',
        content: `A function is a reusable block of code that performs a specific task. 
        Instead of writing the same code over and over, you define it once in a function 
        and call it whenever you need it.`,
        keyPoints: [
          'Functions are reusable blocks of code',
          'Functions can accept parameters as input',
          'Functions can return a value as output',
          'Functions make code cleaner and easier to manage'
        ]
      },
      'arrays': {
        title: 'Arrays',
        content: `An array is a data structure that stores multiple values in a single variable. 
        Instead of creating separate variables for each value, you can group them 
        together in an array and access them using an index.`,
        keyPoints: [
          'Arrays store multiple values in one variable',
          'Array indexes start at 0',
          'Arrays can store numbers, strings, or other data',
          'You can loop through arrays using for loops'
        ]
      },
      'input-output': {
        title: 'Basic Input & Output',
        content: `Input and output (I/O) is how a program communicates with the user. 
        Output displays information to the user, while input lets the user 
        send data back to the program.`,
        keyPoints: [
          'Output displays information to the user',
          'Input reads data from the user',
          'print() or console.log() are common output methods',
          'I/O makes programs interactive'
        ]
      }
    }
  };

  getLesson(subject: string, lessonId: string) {
    return this.lessons[subject]?.[lessonId] || null;
  }
}