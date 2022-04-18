import React from 'react';

const Blogs = () => {
    return (
        <div className='m-3'>
            <h2 className='text-center'>This is my Blog</h2>
            <div className='container'>
                <h3>What are the differences between authorization and authentication?</h3>
                <p><b>Ans:</b>Authorization is a process in an app that aids in controlling information access and limiting user actions. Similarly, authentication is a process that determines whether a user is authorized to access information or perform any action.Simply put, authentication is the process of confirming who a user is, whereas authorization is the process of confirming what they have access to.
                    In a real-world example, when you go through security at an airport, you must show your ID to prove your identity. When you arrive at the gate, you show the flight attendant your boarding pass so they can authorize you to board your flight and allow access to the plane.</p>
                <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
                <p><b>Ans:</b>Following are the main advantages:
                    <ul>
                        <li>Create an application that does not require a backend server.</li>
                        <li>There is no need to spend extra money on a backend server.</li>
                        <li>Sync the application's real-time data.</li>
                        <li>In the application, you can quickly display data.</li>
                        <li>Faster than any other backend web service</li>
                        <li>Because there is no SQL database, it is faster.</li>
                    </ul>
                    Other options to implement authentication are:
                    <ul>
                        <li>Parse</li>
                        <li>AWS Amplify</li>
                        <li>Kuzzle</li>
                        <li>NativeScript</li>
                    </ul>
                </p>
                <h3>What other services firebase provide other than authentication?</h3>
                <p><b>Ans:</b>
                    <ul>
                        <li>Cloud Storage: Cloud Storage for Firebase is designed for app developers who need to store and serve user-generated content like photos and videos.</li>
                        <li>Cloud Firestore: Cloud Firestore is a flexible, scalable database from Firebase and Google Cloud for mobile, web, and server development.</li>
                        <li>Firebase Realtime Database: The Firebase Realtime Database is a database that is hosted in the cloud. Data is stored as JSON and is synchronized in realtime to every client that is connected.</li>
                        <li>Firebase Hosting: Firebase Hosting is a high-quality web content hosting service for developers. You can quickly deploy web apps and serve both static and dynamic content to a global CDN with a single command.</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Blogs;