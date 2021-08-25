import React, { useState } from "react";
import "./AboutUs.css";
import PageHeader from "../PageHeader/PageHeader";
import FAQ from "./FAQ";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  AOS.init({
    duration: 1000,
  });

  const [faqs, setfaqs] = useState([
    {
      question: "Who can participate?",
      answer:
        "Students from any college under CSVTU are invited to form teams of 3-4. You are considered a student if, at the time of application submission, you have not yet graduated. Alumni and faculty are not allowed to be official team members.",
      open: true,
    },
    {
      question: "How do I register for the Hult Prize?",
      answer:
        "To register for the On-campus BIT Durg Hult Prize event, the registrations will be open soon. To get quick updates, stay in touch with us on our social media handles.",
      open: false,
    },
    {
      question: "What happens to the teams who don’t win the competition?",
      answer:
        "Teams that compete in their local Hult Prize On-campus competition and do not win can still apply to participate in one of the +25 Regional Summits through the general Hult Prize application window.",
      open: false,
    },
    {
      question: "How will the teams be judged at the Hult Prize On-campus?",
      answer:
        "The Hult Prize BITD team brings esteemed judges every year to analyze and judge the teams. The criteria set for the judgment will be explained to the teams before the event.",
      open: false,
    },
    {
      question: "Do participants get any resources? If yes, then what?",
      answer:
        "A wide range of resources is made accessible to students who decide to enter the Hult Prize, including one million dollars in start-up capital to the winner along with an ecosystem that constitutes mentors, judges, and others via the Hult Prize Accelerator Program.<br /><br />Alongside the resources provided by the Hult Prize, the BIT- D Team will be readily available to address any difficulties faced by the teams.",
      open: false,
    },
    {
      question: "What if a team cannot afford the costs?",
      answer:
        "One of the most important parts of being an entrepreneur is the ability to raise funds.<br /><br />Historically, selected teams have not had an issue coming up with the funding required to attend one of our regional events. Oftentimes universities afford the costs associated with travel and lodging, and in other cases, teams have crowdfunded their way to the city of their choice.<br /><br />Think of this as the first challenge you will face as an up-and-coming start-up.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setfaqs(
      faqs.map((faq, i) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <React.Fragment>
      <Helmet>
        <title>Hult Prize BITD 2022- About the Event</title>
        <meta
          name="title"
          content="What is Hult Prize? | Hult Prize BITD 2022"
        />
        <meta
          name="description"
          content="The Hult Prize is the world's largest social impact movement. It is a startup competition that crowdsources ideas from challenging students from all over the world to solve a pressing issue."
        />
      </Helmet>
      <PageHeader title="About Us" />
      <div className="aboutUsContainer">
        <div className="section aboutHultSection">
          <h2 className="title" data-aos="fade-up">
            What is <span>Hult Prize?</span>
          </h2>
          <p className="text" data-aos="fade-up">
            For more than a decade, the Hult Prize Foundation has aspired to
            transform how young people ponder upon their potential as
            administrators of change in the world around them. With an
            international community of more than a million youths around the
            world, they have created their destiny in social entrepreneurship.
            <br />
            <br />
            What started as a million-dollar startup competition has now
            initiated a crusade to revamp the future - through sustainable and
            credible development. The Hult Prize is a simple notion; a young
            person with an idea to change the world. With the willingness to see
            it through, he presents it in front of the people who help him
            transform that idea into a real-world business. That is what Hult
            Prize is all about - an idea.
            <br />
            <br />
            With hundreds and thousands of such ideas coming through every day,
            the Hult Prize has become the world’s largest youth movement. It is
            a community of millions of young people, united by a single idea of
            creating enterprises that bring impact.
            <br />
            <br />
            To learn more, visit{" "}
            <a
              href="www.hultprize.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.hultprize.org
            </a>
          </p>
        </div>
        <div className="section onCampusSection">
          <h2 className="title" data-aos="fade-up">
            <span>Hult Prize BIT-D:</span> A competition run by students, for
            the students!
          </h2>
          <p className="text" data-aos="fade-up">
            The Hult Prize has inspired a generation of youth to live a life of
            purpose. Under the Hult Prize On-Campus Program, BIT Durg has been
            organizing its Hult event since 2020.
            <br />
            <br />
            Every year, the Hult Prize Foundation releases a new theme for the
            global competition. A new domain is chosen to be sought, with the
            fundamental criteria being “transformative and sustainable
            business”. The participating teams are expected to come up with an
            idea that revolves around that theme. In essence, the business idea
            has to have a positive net impact on the world with every dollar
            made. It should be a perceivable business idea that must be
            profitable.
            <br />
            <br />
            At BIT Durg, we behold the caliber to transform the world. The Hult
            Prize BITD is an opportunity for all aspiring young minds to go
            about their idea of change. To build an enterprise that pronounces
            impact.
            <br />
            <br />
            We - the Hult Prize BITD team - assure the competing teams with all
            the support and guidance in our power. The teams will be mentored
            and addressed frequently by acclaimed professionals.
          </p>
        </div>
        <div className="section onCampusSection">
          <h2 className="title" data-aos="fade-up">
            Setting the <span>Reels in Motion</span>
          </h2>
          <p className="text" data-aos="fade-up">
            The Hult Prize competition is executed in four stages - where every
            phase holds its stature in making the event.
          </p>
          <h3 className="subtitle" data-aos="fade-up">
            The On-Campus Program
          </h3>
          <p className="text" data-aos="fade-up">
            Since 2009, Hult Prize has managed to set up the world’s largest
            social entrepreneurship network. With the On-Campus Program, the
            global movement has been made accessible to all.
            <br />
            <br />
            Through the On-Campus Program, students at different colleges and
            universities can run their own Hult Prize events. This round
            consists mostly of formulating and presenting your idea to a council
            of judges, giving a presentation that explains your work plan.
            <br />
            <br />
            It entitles you to obtain a rough picture of how other participants
            have addressed the problem and what different tactics are being
            adopted to solve the problem at hand.
          </p>
          <h3 className="subtitle" data-aos="fade-up">
            Regionals
          </h3>
          <p className="text" data-aos="fade-up">
            17 countries constituting India, Japan, China, Belgium, and the UK,
            host the National Level Hult Prize Competition. Out of the 100,000
            students that compete originally, only 5,000 buckle a seat at the
            2-day regional summits. The next accelerator round only brings in
            the top 50 startup ideas.
            <br />
            <br />
            Regional is often the place where you start feeling the chasm and
            impact of the competition.
          </p>
          <h3 className="subtitle" data-aos="fade-up">
            Accelerator
          </h3>
          <p className="text" data-aos="fade-up">
            The best startups from each Regional Summit amass a position in the
            world's largest impact accelerator in Boston, Massachusetts, and
            Hult's castle in the United Kingdom. This six-week-long accelerator
            program aims at educating, identifying, and training the teams to
            compete in the competition and the real world.
          </p>
          <h3 className="subtitle" data-aos="fade-up">
            Global Finals
          </h3>
          <p className="text" data-aos="fade-up">
            The United Nations hosts the Global Finals in New York. Selected
            teams from the Hult Accelerator program have the opportunity to
            present their ideas to a jury composed of UN representatives,
            previous Hult Prize winners, politicians, and CEOs of
            non-governmental organizations working in areas pertaining to the
            year's theme.
          </p>
        </div>
        <div className="section hultPrizeBitdSection">
          <h2 className="title" data-aos="fade-up">
            The Hult Prize 2022- <span>"Getting The World Back To Work"</span>
          </h2>
          <p className="text" data-aos="fade-up">
            The 2022 Hult Prize will focus on{" "}
            <a
              href="https://firebasestorage.googleapis.com/v0/b/hult-prize-7296c.appspot.com/o/documents%2FHult%20Prize%202022%20Theme_compressed.pdf?alt=media&token=a82a8dc2-6d01-4151-ab4d-dc2ca3d8fcfc"
              target="_blank"
              rel="noopener noreferrer"
            >
              Creating two thousand jobs by 2024 by thinking global and acting
              local
            </a>
            . A challenge addressing the global crisis of unemployment in need
            of integral attention and innovative solutions.
            <br />
            <br />
            This year’s challenge is all about execution through innovation.
            Keeping aside the “desire” to invent, the teams are expected to
            bring the already existing enterprises to their community with a
            proven business model. Teams will come up with ideas to consummate
            the existing market needs freshly.
            <br />
            <br />
            The challenge is to come up with a substantial business plan that
            gets a sale before the next Hult Prize Impact Summit. Create an
            impactful, profitable, and job-creating enterprise and get a chance
            to the Regional Summit!
            <br />
            <br />
            The winning team from the Hult Prize BITD event will be competing at
            the Hult Prize Regionals. One winning team from each host city will
            then move onto a summer business incubator, where partakers will
            receive mentorship, advisory and strategic planning, as they create
            prototypes and set up to commence their new social business. A final
            round of competition will be hosted, where the winning team will be
            awarded the $1,000,000 prize.
            <br />
            <br />
            It is time to ask ourselves, “Has every problem been solved?”, “Is
            there something I can do?”. The world has changed - drastically -
            due to the global pandemic. People have lost their jobs and
            economies have plummeted. The world needs bright, vigorous, and
            youthful ideas - now more than ever.
            <br />
            <br />
            There has been no better time than now to be an entrepreneur and
            build the world back. Show what you can do, refurbish the global
            economy. Be a part of the global movement, and lead your generation
            to change the world!
          </p>
        </div>
        <div className="section contactUsSection">
          <h2 className="title" data-aos="fade-right">
            Still got <span className="textTheme">mixed up</span> thoughts?
            <br />
            We are always here.
          </h2>
          <Link to="/contact-us" data-aos="fade-left">
            Contact Us
          </Link>
        </div>
        <div className="section eventBulletinsSection">
          <h2 className="sectionTitle" data-aos="fade-up">
            Here are the <span>Event Bulletins</span>
          </h2>
          <div className="bulletinsList">
            <div className="singleBulletin" data-aos="fade-up">
              <i className="fas fa-crown"></i>
              <h3 className="title">Prize Money</h3>
              <p className="desc">To be revealed soon</p>
            </div>
            <div className="singleBulletin" data-aos="fade-up">
              <i className="fas fa-users"></i>
              <h3 className="title">150+</h3>
              <p className="desc">
                Students participated in Hult Prize BITD 2021.
              </p>
            </div>
            <div className="singleBulletin" data-aos="fade-up">
              <i className="fas fa-school"></i>
              <h3 className="title">45+</h3>
              <p className="desc">
                Colleges are already a part of our campaign.
              </p>
            </div>
            <div className="singleBulletin" data-aos="fade-up">
              <i className="fas fa-school"></i>
              <h3 className="title">45+</h3>
              <p className="desc">
                Colleges are already a part of our campaign.
              </p>
            </div>
            <div className="singleBulletin" data-aos="fade-up">
              <i className="fas fa-school"></i>
              <h3 className="title">45+</h3>
              <p className="desc">
                Colleges are already a part of our campaign.
              </p>
            </div>
            <div className="singleBulletin" data-aos="fade-up">
              <i className="fas fa-school"></i>
              <h3 className="title">45+</h3>
              <p className="desc">
                Colleges are already a part of our campaign.
              </p>
            </div>
          </div>
        </div>
        <div className="section faqSection">
          <h3 className="sectionTitle" data-aos="fade-up">
            <span>Frequently</span> Asked Questions
          </h3>
          <section className="faqsList">
            <div className="container-fluid">
              <div className="singleFaq" data-aos="fade-up">
                {faqs.map((faq, i) => (
                  <FAQ faq={faq} key={i} index={i} toggleFAQ={toggleFAQ} />
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AboutUs;
