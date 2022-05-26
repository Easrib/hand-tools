import React from 'react';

const Blog = () => {
    return (
        <div className='my-2'>
            <h2 className='text-2xl text-primary text-center my-3'>Hand Tools Blog</h2>
            <h4 className='text-2xl font-bold'>Q1: How will you improve the performance of a React Application?</h4>
            <div className='mb-2 ml-4'>Answer:
                <ul>
                    <li>1. Use the divroduction Build</li>
                    <li>2. Virtualize Long Lists</li>
                    <li>3. Avoid Reconciliation</li>
                    <li>4. Keeping component state local where necessary.</li>
                    <li>5. Code-splitting in React using dynamic import()</li>
                </ul></div>
            <h4 className='text-2xl font-bold'>Q2: What are the different ways to manage a state in a React application? </h4>
            <div className='mb-2 ml-4'>Answer: There are four types of state we need to manage at react application
                <ol>
                    <li>1. Local state is data we manage in one or another component.Local state is most often managed in React using the useState
                        hook.</li>
                    <li>2. Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.</li>
                    <li>3. Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.Fortunately there are tools such as SWR and React Query that make managing server state much easier.</li>
                    <li>4. Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!</li>
                </ol>
            </div>
            <h4 className='text-2xl font-bold'>Q3: How does prototypical inheritance work? </h4>
            <p className='mb-2 mr-4'>Answer: The core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.
            </p>
            <h4 className='text-2xl font-bold'>Q4: Why you do not set the state directly in React. For example, if you have `const [products, setProducts] = useState([])`. Why you do not set `products = [...]` instead, you use the `setProducts`. </h4>
            <p className='mb-2 mr-4'>Answer:when we update the state of a component all it's children are going to be rendered as well. or our entire component tree rendered.but when i say our entire component tree is rendered that does not mean that the entire DOM is updated. when a component is rendered we basically get a react element, so that is updating our virtual dom.React will then look at the virtual DOM, it also has a copy of the old virtual DOM,that is why we should not update the state directly, so we can have two different object references in memory, we have the old virtual DOM as well as the new virtual DOM.then react will figure out what is changed and based on that it will update the real DOM accordingly .
            </p>
            <h4 className='text-2xl font-bold'>Q5: What is a unit test? Why should write unit tests? </h4>
            <p className='mb-2 mr-4'>Answer:A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property.

                Unit test is important to improve the quality of code and make the process agile.It helps to find the bugs easily and make debugging easier. Any problems or bugs in the system are identified in the early stages through unit testing, and because of that the cost of bug fixes is significantly reduced. If these bugs are discovered later, then it will be much more expensive to fix them.
            </p>

        </div>
    );
};

export default Blog;