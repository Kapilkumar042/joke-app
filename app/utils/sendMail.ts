import { db } from "./db.server";

const nodemailer=require("nodemailer");


const emailSender=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"kapilbsr321@gmail.com",
        pass:"bsr123@#$&*_"
    }
});
async function generateRandomCode(length: number) {
    const characters = '1234567890';
    let code = '';
    for (let i = 0; i < length; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return code;
  }

export async function sendResetEmail(email: any){
const mailOptions={
    from:"kapilbsr321@gmail.com",
    to:"kapilbca987@gmail.com",
    subject:"Your password reset request",
    text:"Your password reset code is : ${code}"
};
try {
    await emailSender.sendMail(mailOptions);
    console.log(`Password reset email sent to ${email}`);
    
} catch (error) {
    console.log(`Error sending password reset email`,error);
    
}
}

export async function resetPassword(email: any){
    try {
        const user=await db.user.findUnique({
            where:{email}
        })
        if(!user){
            console.log("user not found to forgot");
            return;           
        }
        const code=await generateRandomCode(4);
        await db.user.update({
            where:{email},data:{
                resetCode:code
            }
        })
        await sendResetEmail(email);
        console.log('password reset code generated and sent');
        
    } catch (error) {
        console.log("Error resetting password",error);
        
    }
}