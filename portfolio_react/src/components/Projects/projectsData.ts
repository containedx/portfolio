import boids1 from "../../assets/img/projects/simulation.gif";
import boids2 from "../../assets/img/projects/game.gif";
import image_processing1 from "../../assets/img/projects/image_processing.gif";
import image_processing2 from "../../assets/img/projects/matrix.webp";
import resume1 from "../../assets/img/projects/resume1.gif";
import resume2 from "../../assets/img/projects/resume2.gif";
import tictactoe1 from "../../assets/img/projects/titactoeAI2.gif";
import tictactoe2 from "../../assets/img/projects/tictactoeAi1.gif";
import ai_crowd from "../../assets/img/projects/ai_crowd.gif";
import golf from "../../assets/img/projects/golf.gif";
import meowgames from "../../assets/img/projects/meowgames.gif";
import pinkred from "../../assets/img/projects/pinkred.gif";
import race from "../../assets/img/projects/race.gif";
import snake from "../../assets/img/projects/snake.gif";
import cpptictactoe from "../../assets/img/projects/cpptictactoe.gif";
import gradient_stack from "../../assets/img/projects/gradientstack.gif";
import water_shader from "../../assets/img/projects/water.gif";
import unity1 from "../../assets/img/projects/part1.gif";
import unity2 from "../../assets/img/projects/part2.gif";
import overcooked from "../../assets/img/projects/overcooked.gif";
import python from "../../assets/img/projects/mandala.gif";
import laravel from "../../assets/img/projects/laravel.png";
import color_mix from "../../assets/img/projects/color_mix.gif";



export interface Project {
  title: string;
  years: string;
  topic: string[];
  description: string;
  link: string;
  color?: string;
  picture1?: string;
  picture2?: string;
}

export interface ProjectProps {
  project: Project;
}

export interface SmallProject {
  title: string;
  topic: string[];
  description: string;
  link: string;
  picture: string;
}

export const projects: Project[] = [
  {
    title: "Visualisation Of Boids Algorithm in Unity",
    years: "2020",
    topic: [ "Artifical Intelligence", "Algorithms", "Game Development", "C#", "Unity" ],
    description: "Project created for Engineer's Thesis. It presents simulation of Boids Algorithm. First invented by Craig Reynolds, it simulates flock behaviour(such as birds, sheep, fish flock) using  three simple rules: separation, alignment, and cohesion. In project I included a target that is followed by intelligent flock. To show practical use of this algorithm I created game that uses boids algorithm for enemies. This algorithm is widely used in movies and games, for realistic crowd behaviour, animal herd behaviour, swarm robotics.",
    color: "#ef92cbff",
    link: "https://github.com/containedx/Boids-Algorithm-In-Unity",
    picture1: boids1,
    picture2: boids2,
  },
  {
    title: "Analysis and Processing of Images",
    years: "2020",
    topic: [ "C++", ".NET", "Computer Vision", "Algorithms", "Math" ],
    description: "Implementation of several Image Transformations. CLR application in .NET framework, using System::Drawing namespace. It presents Standard Deviation Filtration(with diferent masks), Diving objects on image into separate images, image closing - use of erosion and dilation procedure, Affine Transformations - scaling, rotation, shear, translate, affine image using transformation matrix. My favourite university project!",
    color: "#92A6DD",
    link: "https://github.com/containedx/Image-Processing/tree/master",
    picture1: image_processing1,
    picture2: image_processing2,
  },
  {
    title: "Interactive Resume Game",
    years: "2023",
    topic: [ "Godot Engine", "gdscript", "Game Development", "Art" ],
    description: "I always wanted to do my resume in form of a game, and I finally did. In role of orange pixel cat you can explore my journey as a programmer. I created most of pixel art and other assets in the game. I made it in Godot Engine. ",
    color: "#ef92cbff",
    link: "https://github.com/containedx/interactive-resume",
    picture1: resume1,
    picture2: resume2,
  },
  {
    title: "Game with AI opponent",
    years: "2022",
    topic: [ "Artifical Intelligence", "Algorithms", "Game Development", "Godot Engine" ],
    description: "tic tac toe game with AI opponent you can never win with. Intelligent opponent is created using Minimax Algorithm. fun fact: when AI goes first, if you dont put your sign in the middle of the board you will 100% loose! Your best chance is always a tie. ",
    color: "#92A6DD",
    link: "https://github.com/containedx/tic-tac-toe-AI",
    picture1: tictactoe1,
    picture2: tictactoe2,
  },
];

export const smallProjects: SmallProject[] = [
  {
    title: "Overcooked",
    topic: [ "Multiplayer", "Game Development", "C#", "Unity" ],
    description: "Recreating popular Overcooked game. Improving my coding/Unity skills and practises by going through Code Monkey course, adding some modifications of my own. It's currently in progress!",
    link: "https://github.com/containedx/purrfectly_cooked",
    picture: overcooked,
  },
  {
    title: "AI Patterns In Game Development",
    topic: [ "Artificial Intelligence", "Algorithms", "C#", "Unity", "Game Development" ],
    description: "Learning and Implementing various AI patterns. Crowd simulation, navmeshes, waypoints, fish flock, hide and seek, move towards target",
    link: "https://github.com/containedx/Artificial-Inteliigence-course",
    picture: ai_crowd,
  },
  {// MAYBE THAT SHOULD BE HIGHLIGHTED PROJECT ITS PRETTY BIG and interesting
    title: "Website Playground",
    topic: [ "Web Development", "React", "Art" ],
    description: "I was in the middle of React course and felt burned out so I decided to do something simple - tic tac toe in React. This basic project triggered my creativity and ended up as artistic website with few arcade games.",
    link: "https://containedx.github.io/meow-games/",
    picture: meowgames,
  },
  {
    title: "One Tap Golf",
    topic: [ "Game Development", "C#", "Unity", "Math" ],
    description: "Mini game predicting ball trajectory. The longer you 'hold down' the ball, the strength of throw grows. Calculated ball trajectory and showed it with many small dots.",
    link: "https://github.com/containedx/One-Tap-Golf",
    picture: golf,
  },
  {
    title: "Pink Red Platform Game",
    topic: [ "Godot Engine", "gdscript", "Game Development" ],
    description: "my first project in godot engine to learn it a little bit. Its a platform game where you collect beetroots and kill enemies, with several different levels.",
    link: "https://github.com/containedx/PINKRED",
    picture: pinkred,
  },
  {
    title: "Race Tracks",
    topic: ["Game Development", "C#", "Unity" ],
    description: "Racing Tracks mini game. Cointains few interesting features: using Splines as road, slowing down car while on grass, speed up on bridge, checkpoints, tracking and saving your best time, game over when you ride into the bush.",
    link: "https://github.com/containedx/Racing-Tracks",
    picture: race,
  },
  {
    title: "Shaders",
    topic: [ "Shaders", "Art", "Unity" ],
    description: "I have always been fascinated by shaders, in my free time I try to learn more about them and how to make them! Presented here is water shader I made.",
    link: "https://github.com/containedx/learning_shaders",
    picture: water_shader,
  },
  {
    title: "Gradient Stack",
    topic: [ "Game Development", "C#", "Unity" ],
    description: "This is final project that resulted from my participation in Game Development course 'Grarantanna'",
    link: "https://github.com/containedx/Gradient-Stack-Game",
    picture: gradient_stack,
  },
  {
    title: "Fun in Unity",
    topic: [ "Physics", "Game Development", "C#", "Unity" ],
    description: "using some fun Unity mechanics - catapult, bomb, spring join, trail ",
    link: "https://github.com/containedx/Playing-with-Unity",
    picture: unity1,
  },
  {
    title: "Unity Particle System",
    topic: [ "Art", "Particle System", "Game Development", "C#", "Unity" ],
    description: "i spend some time learning doing various particle system effects in Unity",
    link: "https://github.com/containedx/Playing-with-Unity",
    picture: unity2,
  },
  {
    title: "Color Mix",
    topic: [ "Game Development", "Unity", "C#" ],
    description: "Mini project made for fun to practise color mixing, color components and color intuition. It is not so easy to recreate color by perfect R-G-B amount.",
    link: "https://github.com/containedx/color-mix",
    picture: color_mix,
  },
  {
    title: "Drawing with python",
    topic: [ "Algorithms", "Art", "Math", "Python" ],
    description: "sometimes for fun I try to draw with code and brush up my python skills",
    link: "https://github.com/containedx/drawing_with_python",
    picture: python,
  },
  {
    title: "Snake Eating Pizza",
    topic: [ "Game Development", "C#", "Unity" ],
    description: "one of my first projects in Unity, if not the first (Unity 2017 !)",
    link: "https://github.com/containedx/Viper-Snake-Game",
    picture: snake,
  },
  {
    title: "C++ tic tac toe",
    topic: [ "C++", "object oriented programming", "Borland Builder 6" ],
    description: "It's probably obvious by now that tic tac toe is basically my hello world. This is my first complete project in C++ to practise object oriented programming. Made in 2016 🤯",
    link: "https://github.com/containedx/tictactoe",
    picture: cpptictactoe,
  },
  {
    title: "Cloud Storage Drive",
    topic: [ "Web Development", "php", "Laravel" ],
    description: "University team project. Web cloud storage drive, similar to drop box or other.",
    link: "https://github.com/containedx/Quoka-Drive",
    picture: laravel,
  },
];
