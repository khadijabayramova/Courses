import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Courses from "./components/Courses";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Skeleton from "@mui/material/Skeleton";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleDelete = (id) => {
    const afterDelete = courses.filter((course) => course.id !== id);
    setCourses(afterDelete);
  };
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          {courses.length === 0 ? (
            <div className="refresh">
              <h1>Refresh Courses</h1>
              <button className="edit" onClick={fetchData}>
                Refresh
              </button>
            </div>
          ) : (
            <Courses courses={courses} deleteCourse={handleDelete} />
          )}
        </>
      )}
    </div>
  );
}
export default App;
