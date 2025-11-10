import { useState } from "react";

export function LandingPageHooks() {
    const [signUpTitle, setSignUpTitle] = useState('Welcome to BizAI')
    const [signUp, setSignUp] = useState('')
    const [showSignUp, setShowSignUp] = useState(false)
    const [showLogOut, setShowLogOut] = useState(false)
    return {signUp, setSignUp, showSignUp, setShowSignUp, signUpTitle, setSignUpTitle, showLogOut, setShowLogOut}
}