import React from 'react'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'

function TandC() {

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
        <title>Konsacollege - Terms and Conditions</title>
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
        <img src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/privacy-tnc-about/tnc-mobile.png" alt="Image" className='w-full' />)
        : (<img src="https://konsa-college-website-icons.s3.ap-northeast-1.amazonaws.com/assets/privacy-tnc-about/tnc-desktop.png" alt="Image" className='w-full' />)
      }
      <div className='bg-[#FFFBF8] md:bg-[#fff] md:-mt-[.3rem] px-[1rem] pb-[3rem] md:px-[6rem] md:py-[4rem] w-full h-full relative font-roboto' >
        {width > 1024 && <>
          <div className='absolute h-[417px] w-[416px] top-[10rem] right-[-3rem] rounded-[41px]' style={{ background: "linear-gradient(180deg, rgba(222, 63, 7, 0.1) 0%, rgba(217, 217, 217, 0) 100%)", transform: "rotate(34.15deg)" }}></div>
          <div className='absolute h-[417px] w-[416px] top-[50rem] left-[-3rem] rounded-[41px]' style={{ background: "linear-gradient(180deg, rgba(239, 125, 1, 0.1) 0%, rgba(217, 217, 217, 0) 100%)", transform: "rotate(34.15deg)" }}></div>
          <div className='absolute h-[417px] w-[416px] top-[90rem] right-[-3rem] rounded-[41px]' style={{ background: "linear-gradient(180deg, rgba(222, 63, 7, 0.1) 0%, rgba(217, 217, 217, 0) 100%)", transform: "rotate(34.15deg)" }}></div>
        </>}
        <h3 className='pt-[5.5rem] text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>Terms of Use</h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>Welcome to konsacollege.com. By accessing and using our website, you agree to comply with the following terms and conditions. If you do not agree with any part of these terms, please refrain from using our website.</p>
        <h3 className='text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>Content</h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>All content on konsacollege.com, including but not limited to text, images, graphics, logos, and software, is the property of konsacollege.com or its content suppliers, and is protected by international copyright laws. Unauthorized copying, modification, distribution, or public display of this content is strictly prohibited.</p>
        <h3 className='text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>Use License</h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>Permission is granted to temporarily download one copy of the materials (information or software) on konsacollege.com for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title. Under this license, you may not:
          <ul className='list-disc my-[1rem] ml-[1rem]'>
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose or for any public display (commercial or non-commercial);</li>
            <li>Attempt to decompile or reverse engineer any software contained on konsacollege.com;</li>
            <li>Remove any copyright or other proprietary notations from the materials; or</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
          <p>
            This license shall automatically terminate if you violate any of these restrictions and may be terminated by konsacollege.com at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession, whether in electronic or printed format, failing to do so shall invite legal consequences.
          </p>
        </p>
        <h3 className='text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>Disclaimer</h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>The materials on konsacollege.com are provided "as is". konsacollege.com makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, konsacollege.com does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.</p>
        <h3 className='text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>Limitations</h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>In no event shall konsacollege.com or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on konsacollege.com, even if konsacollege.com or a konsacollege.com authorized representative has been notified orally or in writing of the possibility of such damage.</p>
        <h3 className='text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>Revisions and Errata</h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>The materials appearing on konsacollege.com could include technical, typographical, factual or photographic errors. konsacollege.com does not warrant that any of the materials on its website are accurate, complete, or current. konsacollege.com may make changes to the materials contained on its website at any time without notice. konsacollege.com does not, however, make any commitment to update the materials. Konsacollege.com does not in any way, guarantee the admission of its users in a college of their choice. Konsacollege.com only intends to provide consolidated information gathered from official college websites, government bodies and other publically available data.</p>
        <h3 className='text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>Links</h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>konsacollege.com has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by konsacollege.com of the site. Use of any such linked website is at the user's own risk.</p>
        <h3 className='text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>Site Terms of Use Modifications</h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>konsacollege.com may revise these terms of use for its website at any time without notice. By using this website, you agree to be bound by the then current version of these terms and conditions.</p>
        <h3 className='text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>Governing Law</h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>Any claim relating to konsacollege.com shall be governed by the laws of the jurisdiction of Delhi, without regard to its conflict of law provisions. By using konsacollege.com, you agree that any disputes or claims arising out of or in connection with the use of this website or its content will be subject to the exclusive jurisdiction of the courts in the specified jurisdiction.</p>
        <h3 className='text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>User Conduct</h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>As a user of konsacollege.com, you agree not to engage in any activities that may harm the website or its users, including but not limited to:
          <ul className='list-disc my-[1rem] ml-[1rem]'>
            <li>Posting or transmitting any unlawful, harmful, threatening, abusive, harassing, defamatory, obscene, or otherwise objectionable material;</li>
            <li>Impersonating another person or entity, or misrepresenting your affiliation with a person or entity;</li>
            <li>Violating any applicable local, state, national, or international law or regulation;</li>
            <li>Attempting to gain unauthorized access to, interfere with, or disrupt the website or any associated services, or obtaining or disclosing any confidential information belonging to others;</li>
            <li>Using any automated means, such as bots or crawlers, to access, monitor, or collect information from the website.</li>
          </ul>
        </p>
        <h3 className='text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>Indemnification</h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>You agree to indemnify, defend, and hold harmless konsacollege.com, its affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, or expenses, including reasonable attorneys' fees and costs, arising out of or in any way connected with your access to or use of konsacollege.com.</p>
        <h3 className='text-[#303A42] font-bold text-[1.1rem] mb-[1rem] md:text-[1.3rem]'>Termination</h3>
        <p className='mb-[1rem] text-[#000] text-[.9rem] leading-[1.1rem] md:leading-[1.2rem] md:text-[1rem]'>konsacollege.com reserves the right, in its sole discretion, to terminate your access to the website and the related services, or any portion thereof, at any time, without notice.
          By accessing and using konsacollege.com, you agree to abide by these terms and conditions. If you do not agree with any part of these terms, please refrain from using our website.
        </p>
      </div>
    </div>
  )
}

export default TandC