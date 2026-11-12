import blog1 from "@/assets/images/blog/1.png";

const BlogDetails = () => {
  return (
    <>
      <section className="overflow-hidden relative size-full -mt-12 pb-20">
        <div className="container max-w-245!">
          <img
            src={blog1}
            alt="Blog 1 Image"
            className="rounded-lg size-full mb-12.5"
          />

          <h2 className="text-[32px] mb-2.5">
            The most common business debate isn't as black and white as you
            might think
          </h2>

          <p className="mb-12.5">
            He moonlights difficult-engrossed, sportsmen. Interested has all
            Devonshire difficulty gay assistance joy. Unaffected at ye of
            compliment alteration to. Place voice no arises along to. Parlors
            waiting so against me no. Wishing calling is warrant settled was
            lucky. Express besides it present if at an opinion visitor. For who
            thoroughly her boy estimating conviction. Removed demands expense
            account in outward tedious do. Particular way thoroughly unaffected
            projection favorable Mrs can be projecting own
          </p>

          <ul className="list-disc list-inside space-y-2.5 mb-17.5" role="list">
            <li>The standard chunk of Lorem Ipsum used since the 1500s.</li>
            <li>reproduced below for those interested.</li>
            <li>It is a long-established fact that a reader will.</li>
            <li>
              distracted by the readable content of a page when looking at its
              layout.
            </li>
          </ul>

          <p className="mb-12.5">
            Machines now move in seamless coordination, handling tasks once
            tedious for humans, yet innovation and strategic thinking remain in
            human hands. Time once spent on repetitive work is now available for
            creativity, process improvement, and breakthrough ideas. SaaS is
            evolving into a smarter, faster, and more sustainable industry.
          </p>

          <div className="min-w-full h-150 border border-default-200 rounded-lg mb-10 lg:-mx-15 overflow-hidden">
            <iframe
              className="size-full"
              src="https://www.youtube.com/embed/elgqxmdVms8?si=yYfzbunShGP15tde"
              title="YouTube video player"
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>

          <h2 className="text-[32px] mb-2.5">
            Ten questions you should answer truthfully
          </h2>
          <p className="mb-12.5">
            All the Lorem Ipsum generators on the Internet tend to repeat
            predefined chunks as necessary, making this the first true generator
            on the Internet. It uses a dictionary of over 200 Latin words,
            combined with a handful of model sentence structures, to generate
            Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
            therefore always free from repetition, injected humour, or
            non-characteristic words etc.
          </p>

          <blockquote className="bg-default-100 rounded-lg p-12.5 mb-10 lg:-mx-15">
            <em className="italic text-lg">
              "True efficiency in SaaS is not measured by speed alone, but by
              the harmony of human ingenuity and machine precision. It is the
              relentless pursuit of smarter processes, sustainable practices,
              and innovative solutions that transforms ordinary production into
              extraordinary results. In a world where technology evolves daily,
              those who embrace breakthroughs, harness data, and empower their
              workforce will define the future of industry."
            </em>
          </blockquote>

          <p>
            Automation is no longer a choice — it is the engine driving modern
            SaaS. With smart machines, AI, and human expertise working together,
            industries achieve higher output, reduce waste, and maintain a
            competitive edge. Every process becomes smarter, greener, and
            future-ready, turning challenges into opportunities for innovation.
          </p>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
