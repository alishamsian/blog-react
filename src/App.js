import React from 'react';
import './App.css';
import blog1 from './image/blog-1.jpeg'
import blog2 from './image/blog-2.jpeg'
import blog3 from './image/blog-3.jpeg'

const App = () => {
    return (
        <>
             <header>
        <nav className="navbar">
            <div className="container">
                <a href="#" className="navbar-brand">Ali Blog</a>
                <div className="navbar-nav">
                    <a href="#">home</a>
                    <a href="#">newblog</a>
                    <a href="#">blog</a>
                    <a href="#">about</a>
                </div>
            </div>
        </nav>
        <div className="banner">
            <div className="container">
                <h1 className="banner-title">
                    <span>Ali</span> Shamsian
                </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus.</p>
                <form>
                    <input type="text" className="search-input" placeholder="Search ..." />
                    <button type="submit" className="search-btn">
                        <i className="fas fa-search"></i>
                    </button>
                </form>
            </div>
        </div>
    </header>
    <section id="blog">
        <div className="blog-heading">
            <span>Blogs</span>
            <h3>My Blog</h3>
        </div>
        <div className="blog-container">
            <div className="blog-box">
                    <img src={blog1} alt="Blog" />
                
                <div className="blog-text">
                    <span>18 July 2021 / Ali Shamsian</span>
                    <a href="#" className="blog-title">Lorem ipsum dolor sit amet consectetur.</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam ipsum at vero ad tenetur maxime nulla.</p>
                    <a href="#">Read More</a>
                </div>
            </div>  

            <div className="blog-box">
                    <img src={blog2} alt="Blog" />
                
                <div className="blog-text">
                    <span>18 July 2021 / Ali Shamsian</span>
                    <a href="#" className="blog-title">Lorem ipsum dolor sit amet consectetur.</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam ipsum at vero ad tenetur maxime nulla.</p>
                    <a href="#">Read More</a>
                </div>
            </div>  

            <div className="blog-box">
                    <img src={blog3} alt="Blog" />
                
                <div className="blog-text">
                    <span>18 July 2021 / Ali Shamsian</span>
                    <a href="#" className="blog-title">Lorem ipsum dolor sit amet consectetur.</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam ipsum at vero ad tenetur maxime nulla.</p>
                    <a href="#">Read More</a>
                </div>
            </div>  

            <div className="blog-box">
                    <img src={blog1} alt="Blog" />
                
                <div className="blog-text">
                    <span>18 July 2021 / Ali Shamsian</span>
                    <a href="#" className="blog-title">Lorem ipsum dolor sit amet consectetur.</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam ipsum at vero ad tenetur maxime nulla.</p>
                    <a href="#">Read More</a>
                </div>
            </div>  

            <div className="blog-box">
                    <img src={blog2} alt="Blog" />
                
                <div className="blog-text">
                    <span>18 July 2021 / Ali Shamsian</span>
                    <a href="#" className="blog-title">Lorem ipsum dolor sit amet consectetur.</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam ipsum at vero ad tenetur maxime nulla.</p>
                    <a href="#">Read More</a>
                </div>
            </div>  

            <div className="blog-box">
                    <img src={blog3} alt="Blog" />
                
                <div className="blog-text">
                    <span>18 July 2021 / Ali Shamsian</span>
                    <a href="#" className="blog-title">Lorem ipsum dolor sit amet consectetur.</a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quam ipsum at vero ad tenetur maxime nulla.</p>
                    <a href="#">Read More</a>
                </div>
            </div>  
        </div>
    </section>
        </>
    )
}

export default App
