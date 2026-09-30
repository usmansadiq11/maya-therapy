const services = [
  {
    number: "01",
    title: "Anxiety & Panic",
    text: "Support for persistent worry, overthinking, physical tension, panic, and the feeling that you always need to be prepared for something to go wrong.",
  },
  {
    number: "02",
    title: "Trauma Therapy",
    text: "Carefully paced therapy for single-incident trauma and longer-standing experiences connected to childhood, relationships, or chronic stress.",
  },
  {
    number: "03",
    title: "Burnout & Perfectionism",
    text: "A space to slow down, reconnect with yourself, and develop more sustainable ways of living and working when high internal pressure has taken its toll.",
  },
];

const approaches = [
  {
    title: "Cognitive Behavioral Therapy",
    short: "CBT",
  },
  {
    title: "Eye Movement Desensitization and Reprocessing",
    short: "EMDR",
  },
  {
    title: "Mindfulness-Based Practices",
    short: "Mindfulness",
  },
  {
    title: "Body-Oriented Techniques",
    short: "Body-Based",
  },
];

const faqs = [
  {
    question: "Do you offer in-person therapy?",
    answer:
      "Yes. Dr. Maya Reynolds offers in-person therapy from her Santa Monica office.",
  },
  {
    question: "Do you offer telehealth?",
    answer:
      "Yes. Secure telehealth sessions are available for clients located in California.",
  },
  {
    question: "Who do you work with?",
    answer:
      "Dr. Reynolds works with adults, including professionals, entrepreneurs, creatives, and people navigating anxiety, trauma, burnout, perfectionism, and high internal pressure.",
  },
  {
    question: "What is your approach to therapy?",
    answer:
      "Her approach is warm, collaborative, and grounded, combining practical tools with depth-oriented work and evidence-based methods.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F7F4EE] text-[#26332D]">

      {/* ================= NAVBAR ================= */}

      <header className="sticky top-0 z-50 border-b border-[#26332D]/10 bg-[#F7F4EE]/95 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

          <a href="#" className="leading-none">
            <span className="block text-lg font-semibold tracking-[0.08em]">
              MAYA REYNOLDS
            </span>

            <span className="mt-1 block text-[10px] tracking-[0.35em] text-[#68746D]">
              PSYD · CLINICAL PSYCHOLOGY
            </span>
          </a>

          <div className="hidden items-center gap-8 text-sm lg:flex">
            <a
              href="#about"
              className="transition-opacity hover:opacity-60"
            >
              About
            </a>

            <a
              href="#approach"
              className="transition-opacity hover:opacity-60"
            >
              Approach
            </a>

            <a
              href="#specialties"
              className="transition-opacity hover:opacity-60"
            >
              Specialties
            </a>

            <a
              href="#office"
              className="transition-opacity hover:opacity-60"
            >
              Office
            </a>

            <a
              href="#faq"
              className="transition-opacity hover:opacity-60"
            >
              FAQ
            </a>
          </div>

          <div className="flex items-center gap-3">

            <a
              href="#contact"
              className="hidden rounded-full bg-[#26332D] px-5 py-3 text-sm font-medium text-[#F7F4EE] transition-transform hover:scale-[1.02] md:inline-flex"
            >
              Schedule a Session
            </a>

            {/* Mobile menu */}
            <div className="lg:hidden">
              <MobileMenuFallback />
            </div>

          </div>

        </nav>
      </header>


      {/* ================= HERO ================= */}

      <section className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 md:min-h-[720px] md:grid-cols-[1.05fr_0.95fr] md:py-24 lg:px-8">

        <div>

          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-[#68746D]">
            Psychological Therapy · Santa Monica, CA
          </p>

          <h1 className="max-w-3xl text-5xl font-medium leading-[1.04] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Therapy for Anxiety, Trauma & Burnout in Santa Monica
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#59645E]">
            Therapy for adults navigating anxiety, trauma, burnout, and the
            pressure of always having to keep going.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">

            <a
              href="#contact"
              className="rounded-full bg-[#26332D] px-7 py-4 text-sm font-medium text-[#F7F4EE] transition-transform hover:scale-[1.02]"
            >
              Schedule a Consultation
            </a>

            <a
              href="#about"
              className="rounded-full border border-[#26332D]/25 px-7 py-4 text-sm font-medium transition-colors hover:bg-[#26332D] hover:text-[#F7F4EE]"
            >
              Learn About Maya
            </a>

          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-[#68746D]">
            <span>In-person therapy</span>
            <span>Secure telehealth</span>
            <span>California clients</span>
          </div>

        </div>


        <div className="relative">

          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-[#C9B49B]/40 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] bg-[#DDD6C9]">
            <img
              src="/images/maya-reynolds.png"
              alt="Dr. Maya Reynolds"
              className="h-[620px] w-full object-cover object-center"
            />
          </div>

          <div className="absolute bottom-5 left-5 rounded-2xl bg-[#F7F4EE]/95 px-5 py-4 shadow-sm backdrop-blur">
            <p className="text-sm font-semibold">
              Dr. Maya Reynolds, PsyD
            </p>

            <p className="mt-1 text-xs text-[#68746D]">
              Licensed Clinical Psychologist
            </p>
          </div>

        </div>

      </section>


      {/* ================= INTRO / ABOUT ================= */}

      <section
        id="about"
        className="bg-[#E7E1D6] px-6 py-24 lg:px-8"
      >

        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-[0.85fr_1.15fr]">

          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/office-1.png"
              alt="Calm therapy office in Santa Monica"
              className="h-[520px] w-full object-cover"
            />
          </div>

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#68746D]">
              A grounded approach
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-tight tracking-[-0.025em] md:text-5xl">
              Therapy that makes space for both insight and change.
            </h2>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#59645E]">
              I&apos;m a licensed clinical psychologist based in Santa Monica,
              California, offering therapy for adults who feel overwhelmed by
              anxiety, stress, or the lingering effects of past experiences.
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-[#59645E]">
              My work is warm, collaborative, and grounded. Sessions are
              structured enough to feel supportive while still leaving space
              for reflection and depth.
            </p>

            <p className="mt-5 max-w-2xl leading-8 text-[#59645E]">
              Together, we can slow things down, understand what is happening,
              and build practical ways to feel more regulated and connected to
              yourself.
            </p>

            <div className="mt-9">
              <a
                href="#contact"
                className="inline-flex rounded-full bg-[#26332D] px-7 py-4 text-sm font-medium text-[#F7F4EE] transition-transform hover:scale-[1.02]"
              >
                Work With Maya
              </a>
            </div>

          </div>

        </div>

      </section>


      {/* ================= SPECIALTIES ================= */}

      <section
        id="specialties"
        className="px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#68746D]">
              Areas of focus
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.025em] md:text-5xl">
              Support for the things that can feel hardest to carry alone.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#59645E]">
              Many of the people I work with are thoughtful and high-achieving
              on the outside while internally feeling exhausted, stuck in
              overthinking, or emotionally on edge.
            </p>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-[1.75rem] border border-[#26332D]/12 bg-[#FBF9F5] p-8 transition-transform duration-300 hover:-translate-y-1"
              >

                <span className="text-sm text-[#A17D5B]">
                  {service.number}
                </span>

                <h3 className="mt-16 text-2xl font-medium">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-[#59645E]">
                  {service.text}
                </p>

                <div className="mt-8 h-px w-full bg-[#26332D]/10" />

                <a
                  href="#contact"
                  className="mt-5 inline-flex text-sm font-medium transition-opacity hover:opacity-60"
                >
                  Explore this area →
                </a>  
              </article>
            ))}

          </div>

        </div>

      </section>


      {/* ================= APPROACH ================= */}

      <section
        id="approach"
        className="bg-[#26332D] px-6 py-24 text-[#F7F4EE] lg:px-8"
      >

        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">

          <div>

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#BFC9C2]">
              How I work
            </p>

            <h2 className="mt-5 max-w-xl text-4xl font-medium leading-tight tracking-[-0.025em] md:text-5xl">
              Practical tools, depth, and a pace that respects your story.
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-[#D5DCD7]">
              I integrate evidence-based methods to help clients understand
              both the emotional and physiological sides of what they are
              experiencing.
            </p>

            <p className="mt-5 max-w-xl leading-8 text-[#D5DCD7]">
              Trauma work is paced carefully, with an emphasis on safety,
              stabilization, and helping you feel more regulated in everyday
              life—not just during sessions.
            </p>

          </div>

          <div className="grid gap-4 sm:grid-cols-2">

            {approaches.map((approach) => (
              <div
                key={approach.short}
                className="rounded-[1.5rem] border border-white/15 bg-white/5 p-7"
              >

                <span className="text-xs uppercase tracking-[0.18em] text-[#BFC9C2]">
                  {approach.short}
                </span>

                <h3 className="mt-10 text-xl font-medium">
                  {approach.title}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= BURNOUT / HIGH ACHIEVERS ================= */}

      <section className="px-6 py-24 lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:items-center">

          <div className="order-2 md:order-1">

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#68746D]">
              When high achievement comes at a cost
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.025em] md:text-5xl">
              You can be successful and still feel exhausted.
            </h2>

            <p className="mt-7 leading-8 text-[#59645E]">
              I frequently support entrepreneurs, creatives, and professionals
              who have spent years pushing through stress and now feel
              disconnected from themselves.
            </p>

            <p className="mt-5 leading-8 text-[#59645E]">
              Therapy can become a space to slow down, reconnect, and develop
              more sustainable ways of living and working.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full border border-[#26332D]/25 px-7 py-4 text-sm font-medium transition-colors hover:bg-[#26332D] hover:text-[#F7F4EE]"
            >
              Start a Conversation
            </a>

          </div>

          <div className="order-1 overflow-hidden rounded-[2rem] md:order-2">

            <img
              src="/images/office-2.png"
              alt="Comfortable therapy office"
              className="h-[520px] w-full object-cover"
            />

          </div>

        </div>

      </section>


      {/* ================= OUR OFFICE ================= */}

      <section
        id="office"
        className="bg-[#E7E1D6] px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl">

          <div className="max-w-3xl">

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#68746D]">
              Our Office
            </p>

            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.025em] md:text-5xl">
              A quiet space to slow down.
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#59645E]">
              My Santa Monica office is designed to feel calm, private, and
              grounding. Natural light and a comfortable, uncluttered
              environment create space to settle in and focus on what matters.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
  <div className="rounded-2xl border border-[#26332D]/10 bg-[#F7F4EE] p-5">
    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#68746D]">
      Location
    </p>
    <p className="mt-2 text-sm font-medium text-[#26332D]">
      Santa Monica, CA
    </p>
  </div>

  <div className="rounded-2xl border border-[#26332D]/10 bg-[#F7F4EE] p-5">
    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#68746D]">
      Sessions
    </p>
    <p className="mt-2 text-sm font-medium text-[#26332D]">
      In-person & telehealth
    </p>
  </div>

  <div className="rounded-2xl border border-[#26332D]/10 bg-[#F7F4EE] p-5">
    <p className="text-xs font-medium uppercase tracking-[0.18em] text-[#68746D]">
      Environment
    </p>
    <p className="mt-2 text-sm font-medium text-[#26332D]">
      Private, calm & comfortable
    </p>
  </div>
</div>

          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-[1.35fr_0.65fr]">

            <div className="overflow-hidden rounded-[2rem]">
              <img
                src="/images/office-1.png"
                alt="Therapy office with natural light"
                className="h-[560px] w-full object-cover"
              />
            </div>

            <div className="grid gap-6">

              <div className="overflow-hidden rounded-[2rem]">
                <img
                  src="/images/office-2.png"
                  alt="Private therapy room"
                  className="h-[267px] w-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between rounded-[2rem] bg-[#26332D] p-8 text-[#F7F4EE]">

                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-[#BFC9C2]">
                    Visit in person
                  </p>

                  <h3 className="mt-4 text-2xl font-medium">
                    Santa Monica, California
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[#D5DCD7]">
                    123th Street 45 W
                    <br />
                    Santa Monica, CA 90401
                  </p>

                </div>

                <p className="mt-8 text-sm leading-6 text-[#D5DCD7]">
                  In-person therapy is available from the office, with secure
                  telehealth sessions also available for clients located in
                  California.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= FAQ ================= */}

      <section
        id="faq"
        className="px-6 py-24 lg:px-8"
      >

        <div className="mx-auto max-w-4xl">

          <div className="text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#68746D]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-5 text-4xl font-medium md:text-5xl">
              A few things you may be wondering.
            </h2>

          </div>

          <div className="mt-14 divide-y divide-[#26332D]/12">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group py-7"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                  {faq.question}

                  <span className="text-2xl font-light transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 max-w-3xl leading-7 text-[#59645E]">
                  {faq.answer}
                </p>

              </details>
            ))}

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}

      <section
        id="contact"
        className="px-6 pb-24 lg:px-8"
      >

        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#B89B7A] px-8 py-20 text-center text-[#26332D] md:px-16">

          <p className="text-xs font-semibold uppercase tracking-[0.24em]">
            Begin here
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-medium leading-tight tracking-[-0.025em] md:text-6xl">
            You don&apos;t have to keep carrying it alone.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#26332D]/75">
            If you&apos;re looking for a therapist who combines practical tools
            with depth-oriented work, schedule a consultation to begin the
            conversation.
          </p>

          <a
            href="#"
            className="mt-9 inline-flex rounded-full bg-[#26332D] px-8 py-4 text-sm font-medium text-[#F7F4EE] transition-transform hover:scale-[1.02]"
          >
            Schedule a Consultation
          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="bg-[#26332D] px-6 py-16 text-[#F7F4EE] lg:px-8">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-3">

          <div>

            <p className="text-xl font-semibold tracking-[0.08em]">
              MAYA REYNOLDS
            </p>

            <p className="mt-2 text-sm text-[#BFC9C2]">
              PsyD · Licensed Clinical Psychologist
            </p>

          </div>

          <div>

            <h3 className="text-sm font-medium uppercase tracking-[0.15em]">
              Explore
            </h3>

            <div className="mt-5 space-y-3 text-sm text-[#BFC9C2]">

              <a href="#about" className="block hover:text-[#F7F4EE]">
                About
              </a>

              <a href="#approach" className="block hover:text-[#F7F4EE]">
                Approach
              </a>

              <a href="#specialties" className="block hover:text-[#F7F4EE]">
                Specialties
              </a>

              <a href="#office" className="block hover:text-[#F7F4EE]">
                Office
              </a>

            </div>

          </div>

          <div>

            <h3 className="text-sm font-medium uppercase tracking-[0.15em]">
              Santa Monica
            </h3>

            <div className="mt-5 space-y-2 text-sm leading-6 text-[#BFC9C2]">

              <p>
                123th Street 45 W
                <br />
                Santa Monica, CA 90401
              </p>

              <p>
                In-person & secure telehealth
              </p>

            </div>

          </div>

        </div>

        <div className="mx-auto mt-14 max-w-7xl border-t border-white/15 pt-6 text-xs text-[#BFC9C2]">
          © 2026 Maya Reynolds, PsyD. All rights reserved.
        </div>

      </footer>

    </main>
  );
}


/* =========================================================
   MOBILE MENU FALLBACK
   =========================================================
   This keeps the page self-contained if MobileMenu.tsx
   is not imported separately.
========================================================= */

function MobileMenuFallback() {
  return (
    <details className="relative">
      <summary
        className="flex h-11 w-11 cursor-pointer list-none items-center justify-center rounded-full border border-[#26332D]/20"
        aria-label="Open navigation menu"
      >
        <span className="flex flex-col gap-1.5">
          <span className="block h-px w-5 bg-[#26332D]" />
          <span className="block h-px w-5 bg-[#26332D]" />
          <span className="block h-px w-5 bg-[#26332D]" />
        </span>
      </summary>

      <div className="absolute right-0 top-14 z-50 w-[calc(100vw-3rem)] max-w-sm rounded-2xl border border-[#26332D]/10 bg-[#F7F4EE] p-5 shadow-xl">

        <div className="flex flex-col">

          <a
            href="#about"
            className="border-b border-[#26332D]/10 py-4"
          >
            About
          </a>

          <a
            href="#approach"
            className="border-b border-[#26332D]/10 py-4"
          >
            Approach
          </a>

          <a
            href="#specialties"
            className="border-b border-[#26332D]/10 py-4"
          >
            Specialties
          </a>

          <a
            href="#office"
            className="border-b border-[#26332D]/10 py-4"
          >
            Office
          </a>

          <a
            href="#faq"
            className="border-b border-[#26332D]/10 py-4"
          >
            FAQ
          </a>

          <a
            href="#contact"
            className="mt-5 rounded-full bg-[#26332D] px-6 py-4 text-center text-sm font-medium text-[#F7F4EE]"
          >
            Schedule a Session
          </a>

        </div>

      </div>
    </details>
  );
}