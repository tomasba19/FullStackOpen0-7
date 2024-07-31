const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  const Header = ({ course }) => {
    return <h1>{course.name}</h1>;
  };

  const Content = ({ course }) => {
    return (
      <div>
        <p>
          {course.parts[0].name} {course.parts[0].exercises}
        </p>
        <p>
          {course.parts[1].name} {course.parts[1].exercises}
        </p>
        <p>
          {course.parts[2].name} {course.parts[2].exercises}
        </p>
      </div>
    );
  };

  const Total = ({ course }) => {
    const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
    return <p>Number of exercises {total}</p>;
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
