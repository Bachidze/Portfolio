import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <>
    <footer>
        <div className='likaflex'>

            <div className='texts'>
                <h1 className='con'>
                    Contact
                </h1>
                <p className='paragraph'>
                I would love to hear about your 
                project and how I could help. 
                Please fill in the form,
                 and I’ll get back to you 
                 as soon as possible.
                </p>
            </div>

            <div className='inputs'>
                <form>
                    <input type="text" placeholder='NAME' maxLength={20} />
                    <input type="text" placeholder='EMAIL' maxLength={20} />
                    <input className='messagemargin' type="message" placeholder='MESSAGE' maxLength={30} />
                </form>
            </div>

            <div className='absolute3'>
            <img src="/assets/Group 26 Copy.svg" alt="" />
            </div>

        </div>

        <div className='sendmessage'>
            <h3 className='send'>
                SEND MESSAGE
            </h3>
            <div className='borderr'></div>
        </div>

        <div className='border7'></div>

        <div className='fl'>
        

            <div>
                <h1 className='GiorgiBachidze2'>
                    Giorgi Bachidze
                </h1>
            </div>

            <div className='media2'>
                
                <a href="https://github.com/Bachidze"><svg className='github' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3035 0C5.50583 0 0 5.50583 0 12.3035C0 17.7478 3.52188 22.3463 8.41254 23.9765C9.02771 24.0842 9.2584 23.715 9.2584 23.3921C9.2584 23.0999 9.24302 22.131 9.24302 21.1005C6.15176 21.6696 5.35203 20.347 5.10596 19.6549C4.96755 19.3012 4.36775 18.2092 3.84485 17.917C3.41423 17.6863 2.79905 17.1173 3.82947 17.1019C4.79838 17.0865 5.49045 17.9939 5.72114 18.363C6.82846 20.2239 8.59709 19.701 9.30454 19.3781C9.4122 18.5783 9.73516 18.04 10.0889 17.7325C7.35136 17.4249 4.49079 16.3637 4.49079 11.6576C4.49079 10.3196 4.96755 9.21227 5.7519 8.35102C5.62886 8.04343 5.19824 6.78232 5.87493 5.09058C5.87493 5.09058 6.90535 4.76762 9.2584 6.3517C10.2427 6.07487 11.2885 5.93645 12.3343 5.93645C13.3801 5.93645 14.4259 6.07487 15.4102 6.3517C17.7632 4.75224 18.7936 5.09058 18.7936 5.09058C19.4703 6.78232 19.0397 8.04343 18.9167 8.35102C19.701 9.21227 20.1778 10.3042 20.1778 11.6576C20.1778 16.3791 17.3018 17.4249 14.5643 17.7325C15.0103 18.1169 15.3948 18.8552 15.3948 20.0086C15.3948 21.6542 15.3794 22.9768 15.3794 23.3921C15.3794 23.715 15.6101 24.0995 16.2253 23.9765C18.6676 23.1519 20.79 21.5821 22.2936 19.4882C23.7972 17.3941 24.6063 14.8814 24.6071 12.3035C24.6071 5.50583 19.1012 0 12.3035 0Z" fill="white"/></svg></a>
                    
                <a href="https://www.linkedin.com/in/giorgi-bachidze-11b68426b/">
                <svg className='linkedin' width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.55118 3.3042C4.41153 3.3042 3.48435 4.23017 3.48435 5.36833C3.48435 6.50724 4.41153 7.4338 5.55118 7.4338C6.6886 7.4338 7.61395 6.50724 7.61395 5.36833C7.61395 4.23017 6.6886 3.3042 5.55118 3.3042ZM3.76642 8.99818V20.4515H7.32904L7.33039 8.99818H3.76642ZM9.56453 8.99713V20.4503L13.119 20.4517L13.1204 14.7845C13.1204 13.3298 13.3738 11.8429 15.2533 11.8429C17.1042 11.8429 17.1042 13.5976 17.1042 14.879V20.4503L20.6628 20.449V14.1689C20.6628 11.3348 20.1455 8.71224 16.3928 8.71224C14.6302 8.71224 13.4768 9.70851 13.0245 10.5618H12.9745L12.9746 8.99713H9.56453ZM22.4354 24H1.98174C1.00586 24 0.211914 23.223 0.211914 22.268V1.73068C0.211914 0.776376 1.00586 0 1.98174 0H22.4354C23.415 0 24.2119 0.776376 24.2119 1.73068V22.268C24.2119 23.223 23.415 24 22.4354 24Z" fill="white"/></svg>
                </a>


                <a href="https://www.instagram.com/giobachidze/">

                <svg className='frontendmentor' width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13.084 0.230569C12.8875 0.234334 12.7002 0.315057 12.5626 0.455404C12.4249 0.59575 12.3478 0.784498 12.3479 0.981084V15.247C12.3479 15.4461 12.4269 15.637 12.5677 15.7778C12.7084 15.9185 12.8993 15.9975 13.0983 15.9975C13.2974 15.9975 13.4883 15.9185 13.6291 15.7778C13.7698 15.637 13.8488 15.4461 13.8488 15.247V0.981084C13.849 0.881401 13.829 0.782702 13.7905 0.69077C13.752 0.598826 13.6955 0.515494 13.6244 0.445622C13.5533 0.375751 13.4689 0.320754 13.3764 0.283831C13.2837 0.246908 13.1847 0.228797 13.085 0.230569H13.084ZM24.4402 4.504C24.3421 4.50683 24.2457 4.52877 24.1561 4.5686L17.7152 7.44351C17.5835 7.50305 17.4717 7.59932 17.3932 7.72081C17.3149 7.84229 17.2732 7.98382 17.2732 8.12841C17.2732 8.273 17.3149 8.41453 17.3932 8.53601C17.4717 8.6575 17.5835 8.75377 17.7152 8.81331L24.1561 11.6974C24.2529 11.741 24.3576 11.7637 24.4637 11.7641C24.6353 11.7636 24.8016 11.7042 24.9347 11.596C25.0679 11.4878 25.16 11.3372 25.1955 11.1693C25.2312 11.0015 25.2082 10.8265 25.1304 10.6735C25.0527 10.5206 24.9248 10.3989 24.7682 10.3287L19.8612 8.12943L24.7682 5.93838C24.9494 5.85681 25.0909 5.70689 25.1621 5.52136C25.2332 5.33581 25.228 5.12969 25.1477 4.94795C25.0868 4.81235 24.9871 4.69783 24.8611 4.61883C24.7352 4.53982 24.5887 4.49986 24.4402 4.504ZM1.03621 9.73538C1.14077 9.68585 1.25538 9.66117 1.37106 9.66328V9.6643C1.53457 9.66748 1.69257 9.72401 1.82101 9.82524C1.94946 9.92647 2.04132 10.0669 2.08262 10.2251C2.86815 13.2343 4.62967 15.8977 7.09121 17.7984C9.55275 19.699 12.5752 20.7294 15.6851 20.7282C15.8842 20.7282 16.0752 20.8073 16.2159 20.9481C16.3567 21.0888 16.4357 21.2798 16.4357 21.4787C16.4357 21.6778 16.3567 21.8687 16.2159 22.0095C16.0752 22.1502 15.8842 22.2292 15.6851 22.2292C8.60245 22.2292 2.4107 17.4473 0.630797 10.6014C0.601853 10.4894 0.599201 10.3722 0.623048 10.259C0.646895 10.1458 0.696595 10.0396 0.768267 9.94876C0.839939 9.85793 0.93164 9.7849 1.03621 9.73538Z" fill="white"/></svg>
                </a>

                <a href="https://www.instagram.com/giobachidze/">

                <svg className='insta' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="#ffffff" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                </a>

            </div>


        </div>
    </footer>
    </>
  )
}

export default Footer