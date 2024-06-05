import Image from 'next/image';

let date: Date = new Date();

export default function Footer() {
    return (
        <footer>
            <div className="bg-mainTitles text-background px-6 py-6">
                <h2 className="text-center text-3xl pb-3">About Handcrafted Haven</h2>
                <p className="text-center text-lg">Welcome to Handcrafted Haven, where creativity meets craftsmanship! We are passionate artisans dedicated to curating and showcasing the finest handcrafted goods from around the world. At Handcrafted Haven, we believe that every piece tells a story. Each creation is infused with the love, dedication, and unique vision of the talented artisans behind it. From intricately designed jewelry to exquisitely crafted home decor, our platform is a celebration of artisanal mastery and creativity.</p>

                <div className="text-right text-lg my-5 pr-3">
                    {/* <FooterLinks /> */}
                    <span className="underline mx-3">Want to see the code? </span>
                    <a className="bg-golden rounded-md px-10 py-2 mt-10 hover:bg-[#F7BE38]/60" href="https://github.com/bykarol/handcrafted-haven-api" target='_blank'>GitHub Repo</a>
                </div>
            </div>
            <div className="pt-4 pr-4">
                <div className="flex justify-end">
                    <a href="https://www.facebook.com" target='_blank'>
                        <Image
                            width={40}
                            height={40}
                            src="/facebook-logo.jpg"
                            alt="Facebook Logo"
                        />
                    </a>
                    <a className="ml-4" href="https://www.instagram.com" target='_blank'>
                        <Image
                            width={40}
                            height={40}
                            src="/instagram-logo.jpg"
                            alt="Instagram Logo"
                        />
                    </a>
                    <a className="ml-4" href="https://www.pinterest.com" target='_blank'>
                        <Image
                            width={40}
                            height={40}
                            src="/pinterest-logo.png"
                            alt="Pinterest Logo"
                        />
                    </a>
                </div>
                <p className="text-right text-lg py-3">{`${date.getFullYear()}`} Handcrafted Haven Inc.</p>
            </div>
        </footer>
    )
}