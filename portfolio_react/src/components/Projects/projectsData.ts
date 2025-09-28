import boids1 from "../../assets/img/projects/simulation.gif";
import boids2 from "../../assets/img/projects/game.gif";
import image_processing1 from "../../assets/img/projects/image_processing.gif";
import image_processing2 from "../../assets/img/projects/matrix.webp";
import resume1 from "../../assets/img/projects/resume1.gif";
import resume2 from "../../assets/img/projects/resume2.gif";
import tictactoe1 from "../../assets/img/projects/titactoeAI2.gif";
import tictactoe2 from "../../assets/img/projects/tictactoeAi1.gif";

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
    topic: [ "C++", ".NET", "Computer Vision", "Algorithms" ],
    description: "University Project, containing several Image Transformation. CLR application in .NET framework, using System::Drawing namespace. It presents Standard Deviation Filtration(with diferent masks), Diving objects on image into separate images, image closing - use of erosion and dilation procedure, Affine Transformations - scaling, rotation, shear, translate, affine image using transformation matrix.",
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

export const smallProjects: Project[] = [
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
    topic: [ "C++", ".NET", "Computer Vision", "Algorithms" ],
    description: "University Project, containing several Image Transformation. CLR application in .NET framework, using System::Drawing namespace. It presents Standard Deviation Filtration(with diferent masks), Diving objects on image into separate images, image closing - use of erosion and dilation procedure, Affine Transformations - scaling, rotation, shear, translate, affine image using transformation matrix.",
    color: "#92A6DD",
    link: "https://github.com/containedx/Image-Processing/tree/master",
    picture1: image_processing1,
    picture2: image_processing2,
  },
];
