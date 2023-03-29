import React from 'react';
import './Home.css';

const Home = () => {
  const paragragh = 'The Math Magician site is a fascinating platform that allows users to perform'
    + 'complex mathematical calculations with ease.The site features a user-friendly'
    + 'calculator that can handle a wide range of mathematical operations, from basic'
    + 'addition and subtraction to advanced trigonometry and calculus. The calculator'
    + 'is highly responsive, ensuring that users can enter their equations quickly and'
    + 'easily, and get instant results. But the Math Magician site is more than just a'
    + 'calculator. It also features a unique API that delivers inspiring and thought-provoking'
    + 'quotes from some of the worlds most renowned mathematicians. The quotes are displayed'
    + 'on the sites screen, providing users with a source of inspiration and motivation as'
    + 'they work through their calculations. Whether you are a student, a teacher, or a professional'
    + 'mathematician, these quotes can help you stay focused, engaged, and inspired as you tackle'
    + 'even the toughest mathematical problems.One of the most impressive features of the Math'
    + 'Magician site is its versatility. Whether you are working on a homework assignment,'
    + 'preparing for an exam, or simply exploring the fascinating world of mathematics,'
    + 'this platform has something to offer.The calculator is highly adaptable, making it'
    + 'suitable for everyone from beginners to experts, and the APIs vast collection of'
    + 'quotes ensures that there is always something new and interesting to discover.'
    + 'Overall, the Math Magician site is a valuable resource for anyone interested in'
    + 'mathematics. Its calculator is highly responsive and user-friendly, while its API'
    + 'provides a wealth of inspiration and motivation for anyone looking to explore the'
    + 'fascinating world of mathematics. Whether you are looking to solve complex equations,'
    + 'brush up on your calculus, or simply immerse yourself in the beauty of mathematics,'
    + 'the Math Magician site is an excellent place to start.';

  return (
    <div className="home-container">
      <h1>Welcome to our page!</h1>
      <p>{paragragh}</p>
    </div>
  );
};

export default Home;
