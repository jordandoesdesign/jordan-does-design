const ContactForm = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Form */}
          <div>
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-primary mb-12">
              Contact Me
            </h2>

            <iframe 
              style={{ border: 'none', width: '100%' }} 
              height="800" 
              src="https://www.supaform.io/forms/contact-me?embedded=true"
              title="Contact Form"
            />
          </div>

          {/* Illustration */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md h-96 bg-muted rounded-3xl flex items-center justify-center">
              <span className="text-muted-foreground text-lg">Image Placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ContactForm;