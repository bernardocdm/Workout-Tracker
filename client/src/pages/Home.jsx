import React from 'react'

function Home() {
  return (
    <div className="min-h-screen">

       {/* upperside */}
        <div className="flex justify-between">
                {/* sidebar */}
            <div className="drawer lg:drawer-ope w-14">
                <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Navbar */}
                    <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
                    </label>
                    </nav>
                </div>

                <div className="drawer-side is-drawer-close:overflow-visible">
                    <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                    <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        {/* List item */}
                        <li>
                        <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                            {/* Home icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                            <span className="is-drawer-close:hidden">Home</span>
                        </button>
                        </li>

                        
                         {/* List item */}
                        <li>
                        <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                            {/* Settings icon */}
                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
                            <span className="is-drawer-close:hidden">Workouts</span>
                        </button>
                        </li>

                        {/* List item */}
                        <li>
                        <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                            {/* Settings icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                            <span className="is-drawer-close:hidden">Settings</span>
                        </button>
                        </li>


                        {/* List item */}
                        <li>
                        <button className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Settings">
                            {/* Settings icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>
                            <span className="is-drawer-close:hidden">Profile</span>
                        </button>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>

            <div className="avatar">
                <div className="w-16 h-16 m-2 rounded-full">
                    <img
                        src="https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"  //?
                    />
                </div>
            </div>
           
        </div>
       
        {/* center */}
        <div className="flex items-center justify-center">
            {/* App exercises Carousel  */}
            <div className='carousel  max-w-3/4 rounded-2xl max-h-64'>
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                    src="https://www.verywellfit.com/thmb/Xio5I7FgQh0GRwhS6qWAio3amOM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Pushups-5680bb925f9b586a9edf3927.jpg"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full max-h-64">
                    <img
                    src="https://i0.wp.com/www.muscleandfitness.com/wp-content/uploads/2019/07/Hands-Clapping-Chaulk-Kettlebell.jpg?quality=86&strip=all"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full max-h-64">
                    <img
                    src="https://explosivewhey.com/cdn/shop/articles/best-workout-routine-for-gym-beginners-135325.png?v=1738755379&width=2048"
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
        
    </div>
  )
}

export default Home;