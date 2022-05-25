import React from 'react';

const MyPortfolio = () => {
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Particulars</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Name</td>
                            <td>Easrib Sharik</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Email</td>
                            <td>easrib.sharik01@gmail.com</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Educational Background</td>
                            <td>
                                <p>WMBA, Institute of Business Administration, Jahangirnagar University</p>
                                <p>BSC in Leather Products Engineering, Institute of Leather Engineering  & Technology, Dhaka University</p>
                            </td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>Skills</td>
                            <td>HTML, CSS, Bootstrap, Tailwind, Javascript, React, NodeJS</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>My Projects</td>
                            <td>
                                <a href="https://shoe-hub-c43f7.web.app/">Shoe Hub</a><br />
                                <a href="https://wedding-moment-ad9ea.web.app/">Wedding Moment</a><br />
                                <a href="https://shimmering-cendol-bdfded.netlify.app/">Watch Zone</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyPortfolio;