import React from 'react'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

function Privacy() {

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className=''>
      <Helmet>
        <meta name="copyright" content="Konsa College" />
        <meta name="viewport" content="width=device-width, intial-scale=1.0" />
        <title>Konsacollege - Privacy Policy</title>
        <meta name="description" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
        <meta name="Abstract" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
        <meta property="og:title" content="Konsacollege - Find the Best Colleges in India" />
        <meta property="og:description" content="Looking for the best engineering college in India? Look no further than Konsacollege. Our comprehensive directory and user-friendly tools make it easy to find the right college hassle-free. Plus, our expert counselors are here to guide you every step of the way. Start your college search with Konsacollege today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.konsacollege.com" />
        <meta property="og:site_name"
          content="Konsacollege - Home" />
        <meta property="og:image"
          content="https://konsa-college-website.vercel.app/assets/KonsaCollege_desktopLogo-d9a0ad42.svg" />
        <meta property="og:determiner" content="..." />
        <meta name="twitter:card" content="Konsacollege is a startup dedicated to helping high school students in India make informed decisions about their college education. With a vast directory of top engineering colleges and user-friendly tools, we make it easy to find the best college hassle-free. Our expert counselors are also available to provide personalized guidance throughout the admissions process. Discover your dream college with Konsacollege today." />
        <meta name="twitter:title" content="Konsacollege - Find the Best Colleges in India" />
        <meta name="twitter:description" content="Finding the right college can be overwhelming, but Konsacollege makes it easy. With a vast directory of top engineering colleges in India and personalized counseling, we help students make informed decisions about their education. Start your search today and discover your dream college with Konsacollege." />
        <meta name="twitter:image"
          content="https://konsa-college-website.vercel.app/assets/KonsaCollege_desktopLogo-d9a0ad42.svg" />
        <meta name="twitter:image:alt"
          content="Konsa College Logo" />
        <meta property="twitter:url" content="https://www.konsacollege.com" />
        <meta property="twitter:site" content="@konsacollege" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="keyword1, keyword2, keyword3, keyword4" />
        <meta name="audience" content="all" />
        <meta name="distribution" content="global" />

      </Helmet>
      {width < 600 ? (
        <img src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/privacy-tnc-about/privacy-mobile.png" alt="Image" className='w-full' />)
        : (<img src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/privacy-tnc-about/privacy-desktop.png" alt="Image" className='w-full' />)
      }
      <div className='bg-[#FFFBF8] md:bg-[#fff] md:-mt-[.3rem] px-[1rem] pb-[3rem] md:px-[6rem] md:py-[4rem] w-full h-full relative font-roboto' >
        {width > 1024 && <>
          <div className='absolute h-[417px] w-[416px] top-[10rem] right-[-3rem] rounded-[41px]' style={{ background: "linear-gradient(180deg, rgba(222, 63, 7, 0.1) 0%, rgba(217, 217, 217, 0) 100%)", transform: "rotate(34.15deg)" }}></div>
          <div className='absolute h-[417px] w-[416px] top-[40rem] left-[-3rem] rounded-[41px]' style={{ background: "linear-gradient(180deg, rgba(239, 125, 1, 0.1) 0%, rgba(217, 217, 217, 0) 100%)", transform: "rotate(34.15deg)" }}></div>
        </>}
        <h3 className='pt-[5.5rem] text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>Privacy policy: </h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>The website www.konsacollege.com is developed and operated by our dedicated team. If you require any more information or have any questions about our privacy policy, please feel free to contact us by email at <a href="mailto:konsacollegeyt@gmail.com" className="text-blue-500 hover:text-blue-700">konsacollegeyt@gmail.com</a>.
        </p>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>
          At <a href="https://www.konsacollege.com/" className="text-blue-500 hover:text-blue-700">konsacollege.com</a> , the privacy of our visitors is of extreme importance to us. This privacy policy document outlines the types of personal information received and collected by <a href="https://www.konsacollege.com/" className="text-blue-500 hover:text-blue-700">konsacollege.com</a> and how it is used.
        </p>
        <h3 className='text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>Log files:</h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>At <a href="https://www.konsacollege.com/" className="text-blue-500 hover:text-blue-700">konsacollege.com</a>, we employ cookies to gather information about visitor preferences, track user-specific data on the pages accessed or visited, and personalize web page content based on the visitor's browser type or other details provided by the visitor through their browser. This approach ensures a professional and customized experience for our users.</p>
        <h3 className='text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>Cookies:
        </h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>Google, acting as a third-party provider, employs cookies to display ads on <a href="https://www.konsacollege.com/" className="text-blue-500 hover:text-blue-700">konsacollege.com</a>.
          <p>Google's use of DART cookies allows it to deliver ads to users based on their visits to <a href="https://www.konsacollege.com/" className="text-blue-500 hover:text-blue-700">konsacollege.com</a>.com and other websites across the internet.</p>
          <p>Users can choose to opt-out of the DART cookie by reviewing Google's ad and content network privacy policy at the following URL:[ <a href="https://policies.google.com/technologies/ads"  className="text-blue-500 hover:text-blue-700"> Advertising – Privacy & Terms – Google</a>] (<a href="https://policies.google.com/technologies/ads"  className="text-blue-500 hover:text-blue-700">Advertising – Privacy & Terms – Google</a> "smartCard-inline")</p>
          <p>Our advertising partners, such as Google Adsense, may utilize cookies and web beacons on our site. With every ad request, they automatically obtain your IP address. Third-party ad networks may also use other technologies (like cookies, JavaScript, or Web Beacons) to gauge the effectiveness of their ads and personalize the advertising content you see.</p>
          <p><a href="https://www.konsacollege.com/" className="text-blue-500 hover:text-blue-700">konsacollege.com</a> does not have access to or control over the cookies employed by third-party advertisers. We recommend consulting the individual privacy policies of these third-party ad servers for more in-depth information on their practices and instructions on opting out of specific practices. Konsacollege.com's privacy policy does not govern, and we cannot regulate, the activities of other advertisers or websites.</p>
          <p>To understand how Google utilizes this data, visit: <br /> <a href="https://policies.google.com/technologies/partner-sites" className="text-blue-500 hover:text-blue-700">How Google uses information from sites or apps that use our services – Privacy & Terms – Google</a></p>
          <p>If you prefer to disable cookies, you can do so through your browser's settings. For more comprehensive information about cookie management with specific web browsers, refer to the respective browser's website.</p>
        </p>
        <h3 className='text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>Your Consent:</h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>By engaging with our site, you give your consent to our website's privacy policy.
        </p>
        <h3 className='text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>Alterations to Our Privacy Policy:</h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>In the event of any revisions to our privacy policy, we will display those changes on this page.
        </p>
        <h3 className='text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>Contact Us:
        </h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>If you have any questions or require clarification regarding our privacy policy, don't hesitate to contact us using the available contact details.</p>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'> <a href="https://www.konsacollege.com/Contact" className="text-blue-500 hover:text-blue-700">https://www.konsacollege.com/Contact</a></p>
      </div>
    </div>
  )
}

export default Privacy