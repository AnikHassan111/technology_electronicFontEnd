import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ContextApi } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";


const Register = () => {
    const { handleUserCreate, handleGoogleLogin } = useContext(ContextApi)

    const handleRegister = (e) => {
        e.preventDefault()
        let form = new FormData(e.currentTarget)
        let name = form.get('name')
        let email = form.get('email')
        let PhotoUrl = form.get('PhotoUrl')
        let password = form.get('password')

        e.target.name.value = ""
        e.target.email.value = ""
        e.target.password.value = ""

        console.log(email, password, name);



        if (password.length < 6) {
            toast.error("Password Should  minimum 6 character", {
                position: toast.POSITION.TOP_CENTER
            })
            return
        }


        if (!/[A-Z]/.test(password)) {
            toast.error("Password Should UpperCase character", {
                position: toast.POSITION.TOP_CENTER
            })
            return
        }
        // eslint-disable-next-line no-useless-escape
        if (!/[-!$%^&*()_+|~=`{}\[\]:\/;<>?,.@#]/.test(password)) {
            toast.error("Password Should Spectial character", {
                position: toast.POSITION.TOP_CENTER
            })
            return
        }

        handleUserCreate(email, password, name,)
            .then((res) => {
                toast.success("Create user successfully", {
                    position: toast.POSITION.TOP_CENTER
                })
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: PhotoUrl
                })
            })
            .catch(() => {
                toast.error("User Not Create", {
                    position: toast.POSITION.TOP_CENTER
                })
            })
    }
    return (
        <div>
            <div>
                <div className="hero max-w-7xl mx-auto mt-5">
                    <form onSubmit={handleRegister} className="w-2/4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered border-blue-500 w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">PhotoUrl</span>
                            </label>
                            <input type="text" placeholder="PhotoUrl" name="PhotoUrl" className="input input-bordered border-blue-500 w-full" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered w-full border-blue-500" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold">Password</span>
                            </label>
                            <input type="password" placeholder="password" name="password" className="input input-bordered border-blue-500" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral">Register</button>
                        </div>
                        <div className="flex justify-between mt-5">
                            <p className="mt-5">Already have an account? <Link to={'/login'} className="text-blue-500 ">Login</Link></p>
                            <button onClick={() => { handleGoogleLogin() }} className="btn btn-outline btn-info">Google</button>
                        </div>
                    </form>
                </div>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Register;