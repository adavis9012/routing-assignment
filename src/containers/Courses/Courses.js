import React, {useState} from 'react';
import './Courses.scss';
import {Route, Link} from "react-router-dom";
import Course from "../Course/Course";

function Courses(props) {
    const [courses] = useState([
        {id: 1, title: 'Angular - The Complete Guide'},
        {id: 2, title: 'Vue - The Complete Guide'},
        {id: 3, title: 'PWA - The Complete Guide'}
    ]);

    return (
        <div>
            <h1>Amazing Udemy Courses</h1>
            <section>
                {
                    courses.map(course => {
                        return (
                            <article className={course} key={course.id}>
                                <Link to={{
                                    pathname: `${props.match.path}/${course.id}/`,
                                    search: `?title=${course.title}`
                                }}>
                                    {course.title}
                                </Link>
                            </article>
                        );
                    })
                }
            </section>
            <Route path={`${props.match.path}/:id`} component={Course}/>
        </div>
    )
}

export default Courses;