function Testimonials() {
    return (
        <div className="text-center px-4">
            <div className="pt-20">
                <span className="section-title">Words from Collaborators</span>
            </div>
            <p className="text-app-fg-muted text-lg max-w-2xl mx-auto">
                Don’t just take my word for it — here’s what others have said
                about working with me.
            </p>

            <div className="lg:mx-40 mt-10 flex justify-center items-stretch gap-8 h-full">
                {[
                    {
                        text: "“Delivered clean code fast, and even suggested improvements we didn’t think of. Super easy to work with.”",
                        author: "— F.M., Freelance Client",
                    },
                    {
                        text: "“Made a solid contribution to our repo and helped clean up a messy PR. Highly recommended.”",
                        author: "— OSS Maintainer",
                    },
                ].map((testimonial, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col justify-between border h-full max-w-md min-h-[220px] border-app-border bg-app-surface p-6 rounded-xl shadow-sm transition-shadow duration-200 hover:shadow-lg hover:border-app-accent"
                    >
                        <div className="flex items-center justify-center mb-4">
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-app-accent/30">
                                <img src={`https://randomuser.me/api/portraits/men/${idx + 18}.jpg`} alt={`${testimonial.author}`} className="rounded-full" width={48} height={48} loading="lazy" />
                            </span>
                        </div>
                        <p className="text-app-fg-muted italic flex-1 flex items-center justify-center">
                            {testimonial.text}
                        </p>
                        <div className="mt-4 text-sm text-app-fg font-semibold text-right">
                            {testimonial.author}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;