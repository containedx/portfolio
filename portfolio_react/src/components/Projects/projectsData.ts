import boids1 from "../../assets/img/projects/simulation.gif";
import boids2 from "../../assets/img/projects/game.gif";

export interface Project {
  title: string;
  years: string;
  topic: string;
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
    topic: "✦ Artifical Intelligence, Algorithms, Game Development ✦",
    description: "Project created for Engineer's Thesis. It presents simulation of Boids Algorithm. First invented by Craig Reynolds, it simulates flock behaviour(such as birds, sheep, fish flock) using  three simple rules: separation, alignment, and cohesion. In project I included a target that is followed by intelligent flock. To show practical use of this algorithm I created game that uses boids algorithm for enemies. This algorithm is widely used in movies and games, for realistic crowd behaviour, animal herd behaviour, swarm robotics.",
    color: "#A79CC9",
    link: "https://github.com/containedx/Boids-Algorithm-In-Unity",
    picture1: boids1,
    picture2: boids2,
  },
  {
    title: "Project Z",
    years: "2021",
    topic: "✦ Artifical Intelligence, Algorithms, Game Development ✦",
    description: "C#, Unity",
    color: "#92A6DD",
    link: "",
    picture1: "",
    picture2: "",
  },
  {
    title: "Project W",
    years: "2021-2023",
    topic: "✦ Artifical Intelligence, Algorithms, Game Development ✦",
    description: "GDScript, Godot Engine",
    color: "#8AB8E0",
    link: "",
    picture1: "",
    picture2: "",
  },
  {
    title: "Project V",
    years: "2023-now",
    topic: "✦ Artifical Intelligence, Algorithms, Game Development ✦",
    description: "C#, Unity Engine",
    color: "#B7C9E2",
    link: "",
    picture1: "",
    picture2: "",
  },
];
