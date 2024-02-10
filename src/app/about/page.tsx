import Footer from "@/src/components/Footer";

export const metadata = {
  title: "About Me",
  description: `Here are some details about my self.`,
};

export default function About() {
  return (
    <>
      <div className="mb-20 mt-10 flex flex-col gap-4 text-black/60 dark:text-white/60 lg:mx-44 md:mx-16 sm:mx-4 space-y-3">
        <h1 className="sm:text-6xl text-4xl font-black text-black dark:text-white">
          About Us
        </h1>
        <h2 className="text-4xl font-bold text-black dark:text-white">
          Welcome to [Your Website Name]
        </h2>
        <p className="text-xl">
          At [Your Website Name], we are dedicated to [briefly describe the main
          purpose or mission of your website]. Established in [Year of
          Establishment], we have emerged as a prominent player in
          [industry/sector].
        </p>

        <h2 className="text-4xl font-bold text-black dark:text-white">
          Our Story
        </h2>
        <p className="text-xl">
          [Your Website Name] was founded in [Year of Establishment] by a
          passionate team committed to [state the core objective or goal of the
          team]. Since our inception, we have evolved into a [mention any
          notable achievements or milestones].
        </p>
        <h2 className="text-4xl font-bold text-black dark:text-white">
          Our Mission
        </h2>
        <p className="text-xl">
          Our mission at [Your Website Name] is to [clearly articulate the
          mission or purpose of your website]. We strive to provide [adjective]
          [specify what makes your services unique] for [target audience]. Our
          commitment is to ensure a [mention key aspects, e.g., safer, better,
          faster] experience for our users worldwide.
        </p>

        <h2 className="text-4xl font-bold text-black dark:text-white">
          Core Values
        </h2>
        <ul className="list-disc ml-5 text-xl">
          <li>
            Quality: We believe in delivering the highest quality
            [products/services] to our users.
          </li>
          <li>
            Integrity: Transparency and honesty are at the core of our
            operations.
          </li>
          <li>
            Innovation: Embracing creativity and staying at the forefront of
            [industry/sector] trends.
          </li>
        </ul>
        <h2 className="text-4xl font-bold text-black dark:text-white">
          Important Notice
        </h2>
        <p className="text-xl">
          [Your Website Name] is an independent entity and is not affiliated
          with [mention any relevant organizations]. [Mention any trademarks or
          copyrights]. We only share [mention what you share, e.g., original
          content, products] for [purpose, e.g., personal use] without any
          modifications.
        </p>
        <h2 className="text-4xl font-bold text-black dark:text-white">
          Connect With Us
        </h2>
        <p className="text-xl">
          Follow [Your Website Name] on social media for the latest updates and
          news:
        </p>
        <ul className="list-disc ml-10 text-xl">
          <li>[Link to Facebook Page]</li>
          <li>[Link to Twitter Profile]</li>
          <li>[Link to YouTube Channel]</li>
        </ul>

        <h2 className="text-4xl font-bold text-black dark:text-white">
          Technical Support
        </h2>
        <p className="text-xl">
          Encountering technical issues? Our dedicated support team is here to
          assist you. [Include a link to your support page or contact
          information]
        </p>
        <h2 className="text-4xl font-bold text-black dark:text-white">
          Feedback
        </h2>
        <p className="text-xl">
          We value your feedback! Whether it's a suggestion, general feedback,
          or expressing your love for [Your Website Name], we welcome your
          thoughts. [Include a link to your feedback form or contact
          information]
        </p>
        <p className="text-xl">
          Thank you for being a part of [Your Website Name]. We look forward to
          [continuing to serve you/bringing you more exciting features and
          content].
        </p>
        <p className="text-xl">[Your Name]</p>
        <p className="text-xl">Founder/CEO, [Your Website Name]</p>
        <hr />
        <p className="text-xl">
          Feel free to customize the template to better fit the specifics of
          your website and its goals.
        </p>
      </div>
      <Footer />
    </>
  );
}
