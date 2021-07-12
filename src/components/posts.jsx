/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import cardpic from "../img/blog-list-2.png";
import _ from "lodash";

const pageSize = 10;
const mystyle = {
    height: "520px"
}

const Posts = () => {
    const [posts, setposts] = useState();
    const [paginatedPosts, setpaginatedPosts] = useState();
    const [currentPage, setcurrentPage] = useState(1);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
            console.log(res.data);
            setposts(res.data);
            setpaginatedPosts(_(res.data).slice(0).take(pageSize).value());
        });
    }, []);
    const pageCount = posts ? Math.ceil(posts.length / pageSize) : 0;
    if (pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);

    const pagination = (pageNo) => {
        setcurrentPage(pageNo);
        const startIndex = (pageNo - 1) * pageSize;
        const paginatedPosts = _(posts).slice(startIndex).take(pageSize).value();
        setpaginatedPosts(paginatedPosts);

    };
    return <div className="container">{
        !paginatedPosts ? ("No data found") : (

            <div class="row">
                {paginatedPosts.map((post, index) => (
                    <div className="col-md-3" key={post.id}>
                        <div className="card mb-5 shadow-sm" style={mystyle}>
                            <div className="card-body">
                                <img src={cardpic}></img>
                                <div className="card-title" style={{ paddingTop: "15px", height: "60px" }}>
                                    <h5> {post.title}</h5>
                                </div>
                                <div className="card-text" style={{ paddingTop: "10px" }}>
                                    {post.body}
                                </div>
                                <div style={{ marginTop: "6px" }}>
                                    <a href="#" className="btn btn-outline-primary rounded-0">Read More</a>
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

        )}

        <nav className="d-flex justify-content-center">
            <ul className="pagination">
                {
                    pages.map((page) => (
                        <li
                            className={
                                page === currentPage ? "page-item active" : "page-item"
                            }
                        >
                          <p className="page-link"
                                onClick={() => pagination(page)}
                            >{page}</p>
                        </li>
                   ))}
                </ul>
            </nav>
    </div>
}
export default Posts;