import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />

            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4 block">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div>

                <div className="mt-4 flex items-center justify-end">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Log in
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}

// import { useForm } from '@inertiajs/react';

// export default function Login() {
//     const { data, setData, post, processing, errors } = useForm({
//         email: '',
//         password: '',
//     });

//     const submit = (e) => {
//         e.preventDefault();
//         post('/login');
//     };

//     return (
//         <div className="flex items-center justify-center h-screen bg-gray-100">
//             <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
//                 <h2 className="text-2xl font-bold mb-6 text-center">ログイン</h2>
//                 {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email}</p>}
//                 <form onSubmit={submit}>
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium">Email</label>
//                         <input
//                             type="email"
//                             value={data.email}
//                             onChange={(e) => setData('email', e.target.value)}
//                             className="w-full p-2 border rounded-lg"
//                         />
//                     </div>
//                     <div className="mb-4">
//                         <label className="block text-sm font-medium">Password</label>
//                         <input
//                             type="password"
//                             value={data.password}
//                             onChange={(e) => setData('password', e.target.value)}
//                             className="w-full p-2 border rounded-lg"
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600"
//                         disabled={processing}
//                     >
//                         ログイン
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }
