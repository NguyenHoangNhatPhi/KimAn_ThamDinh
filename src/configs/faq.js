import {
    Platform
} from 'react-native';

const FAQ = [
    {
        title: `<p class="p1">&nbsp;</p>
        <ul class="ul1">
            <li class="li2"><strong>What is the NUS Medicine Alumni Mobile App for?</strong></li>
        </ul>`,
        content: `<p class="p2">The <strong>NUS Medicine Alumni Mobile App</strong> serves as a convenient portal for alumni to connect
        and stay in touch with each other and the school. Features include alumnus-to-alumnus chat, news notifications, as
        well as easy access to our Class Reunion Concierge Service and life-long learning programmes.</p>`,
        heightContent:Platform.OS === 'ios' ? 180 : 200
    },
    {
        title: `<p class="p1">&nbsp;</p>
        <ul class="ul1">
            <li class="li2"><strong>How do I register for the app?</strong></li>
        </ul>`,
        content: `<p class="p2">You will require the following details for registration:</p>
        <ul class="ul1">
            <li class="li2">Full name (As shown in NRIC/Passport)</li>
            <li class="li2">Email address</li>
            <li class="li2">Graduation Year for MBBS</li>
        </ul>
        <p class="p3">Upon submitting your registration details, the verification process will take 1 &ndash; 3 working days.
            Successful verification will prompt an app notification on your mobile device, and you will have full access to the
            app features.</p>
        <p class="p3">The NUS Medicine Alumni Relations Office will contact you by your provided email address if additional
            details are required for your account verification. If you face any registration issues, you may contact the NUS
            Medicine Alumni Relations Office at alumni.med@nus.edu.sg</p>`,
        // heightContent:400
        heightContent:Platform.OS === 'ios' ? 400 : 450
    },{
        title :`<p class="p2">&nbsp;</p>
        <ul class="ul1">
            <li class="li2"><strong>What are the password requirements?</strong></li>
        </ul>`,
        content:`<p class="p2">Please check that your password meets the requirements as specified below:</p>
        <ul class="ul1">
            <li class="li4">Between 8&ndash;16 characters in length</li>
            <li class="li2">Contains at least 1 uppercase alphabetic character (A&ndash;Z)</li>
            <li class="li2">Contains at least 1 lowercase alphabetic character (a&ndash;z)</li>
            <li class="li2">Contains at least 1 numeric character (0&ndash;9)</li>
        </ul>`,
        heightContent:250
    },{
        title:`<p class="p5">&nbsp;</p>
        <ul class="ul1">
            <li class="li2"><strong>I am unable to log in.</strong></li>
        </ul>`,
        content:`<p class="p4">Once you have exceeded 3 consecutive unsuccessful attempts, you will not be able to log in. You may retry
        after 1 hour. <span class="s1">Alternatively, you may contact the NUS Medicine Alumni Relations Office at
            alumni.med@nus.edu.sg.</span></p>`,
            heightContent:150
    },{
        title:`<p class="p2">&nbsp;</p>
        <ul class="ul1">
            <li class="li2"><strong>I forgot my password.</strong></li>
        </ul>`,
        content:`<p class="p2">Please click on the &ldquo;Forgot Password?&rdquo; on the login page to reset your password. A link for
        password reset will be sent to your registered email address. If you are unable to access your registered email
        account, please contact the NUS Medicine Alumni Relations Office at alumni.med@nus.edu.sg.</p>`,
        heightContent:Platform.OS === 'ios' ? 150 : 200
    },{
        title:`<p class="p2">&nbsp;</p>
        <ul class="ul1">
            <li class="li4"><strong>How can I change my password?</strong></li>
        </ul>`,
        content:`<p class="p4">Please go to &ldquo;My Settings&rdquo; to change your password.</p>`,
        // heightContent:80
        heightContent:Platform.OS === 'ios' ? 80 : 100

    },
    // {
    //     title:`<p class="p2">&nbsp;</p>
    //     <ul class="ul1">
    //         <li class="li2"><strong>Which operating system platforms is the app available on?</strong></li>
    //     </ul>`,
    //     content:`<p class="p2">The app is supported on iOS and Android platforms.</p>`,
    //     heightContent:Platform.OS === 'ios' ? 80 : 100

    // },
    {
        title:`<p class="p2">&nbsp;</p>
        <ul class="ul1">
            <li class="li2"><strong>My app is not working properly. What should I do?</strong></li>
        </ul>`,
        content:`<p class="p2">Please report all technical issues to the NUS Medicine Alumni Relations Office at alumni.med@nus.edu.sg.</p>`,
        heightContent:120
    }
]

export default FAQ;