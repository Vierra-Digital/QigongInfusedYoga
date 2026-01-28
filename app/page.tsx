import Image from 'next/image'
import styles from './page.module.css'
import ScrollAnimations from './components/ScrollAnimations'
import HeroVideo from './components/HeroVideo'
import CtaButton from './components/CtaButton'

export default function Home() {
  return (
    <main className={styles.main}>
      <ScrollAnimations />
      {/* Header/Navigation */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <div className={styles.navContainer}>
            <a href="https://qigonginfusedyoga.com" className={styles.logoContainer} aria-label="Home">
              <Image
                src="/images/logo.webp"
                alt="Qigong Infused Yoga"
                width={100}
                height={100}
                className={styles.logoImage}
              />
            </a>
            <div className={styles.navLinks}>
              <a href="https://qigonginfusedyoga.com">Home</a>
              <a href="#about">About</a>
              <a href="#classes">Classes</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* SECTION 1 - HERO */}
      <section className={styles.hero}>
        <HeroVideo />
        <div className={styles.heroOverlay}></div>
        <div className={styles.container}>
          <h1 className={styles.heroTitle}>
            Start Your Sunday<br />With Qigong
          </h1>
          <p className={styles.heroSubheadline}>
            A free weekly nervous system healing class to help you release anxiety, soften chronic tension, and feel like yourself again.
          </p>
          <CtaButton className={styles.ctaPrimary}>
            Join Free Class + Free Healing Video
          </CtaButton>
          <p className={styles.heroDetails}>
            Sundays • 10–11am EST • Live on Zoom
          </p>
        </div>
      </section>

      {/* SECTION 1b - FREE CLASS + VIDEO */}
      <section className={`${styles.section} ${styles.sectionAlt} ${styles.freeClassSection}`} id="free-class">
        <div className={styles.container}>
          <h2 className={styles.freeClassTitle}>
            The First Start Your Sunday With Qigong Class Is Free
          </h2>
          <p className={styles.freeClassSubtext}>
            Plus Instant Access To A Free 50 Minute Qigong Infused Yoga® Video
          </p>
          <div className={styles.freeClassVideoWrapper}>
            <iframe
              src="https://player.vimeo.com/video/1156285179"
              className={styles.freeClassVideo}
              allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
              allowFullScreen
              frameBorder="0"
              title="Free 50 minute Qigong Infused Yoga video"
              style={{ border: 'none' }}
            />
          </div>
          <div className={styles.freeClassCtaWrapper}>
            <CtaButton className={styles.ctaPrimary}>
              Join Free Class + Free Healing Video
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 2 - PAIN POINTS */}
      <section className={styles.section} id="about">
        <div className={styles.container}>
          <h2 className={styles.survivalSectionTitle}>
            Is Your Nervous System Stuck in Survival Mode?
          </h2>
          <div className={styles.survivalSectionWrapper}>
            <div className={styles.survivalImageWrapper}>
              <Image
                src="/images/energeticconnectiontosun.jpg"
                alt="Woman in nature connecting with energy and light"
                width={1000}
                height={600}
                className={styles.survivalImage}
              />
              <p className={styles.survivalImageCaption}>
                When stress, anxiety, or unresolved experiences accumulate, your body responds. The nervous system enters a protective state, holding tension as a form of defense.
              </p>
              <p className={styles.survivalInsightText}>
                These symptoms are not isolated issues—they are interconnected signals that your nervous system is overworked and overwhelmed. Until the nervous system recognizes safety, your body continues to protect itself through tension and bracing.
              </p>
            </div>
            <div className={styles.survivalContent}>
              <h3 className={styles.survivalSubtitle}>Common Signs Include:</h3>
              <div className={styles.survivalGrid}>
                <div className={styles.survivalItem}>
                  <span className={styles.survivalItemText}>Tight Shoulders Or Neck</span>
                </div>
                <div className={styles.survivalItem}>
                  <span className={styles.survivalItemText}>Lower Back Tension</span>
                </div>
                <div className={styles.survivalItem}>
                  <span className={styles.survivalItemText}>Hip Stiffness</span>
                </div>
                <div className={styles.survivalItem}>
                  <span className={styles.survivalItemText}>Difficulty Relaxing</span>
                </div>
                <div className={styles.survivalItem}>
                  <span className={styles.survivalItemText}>Persistent Fatigue</span>
                </div>
                <div className={styles.survivalItem}>
                  <span className={styles.survivalItemText}>Racing Thoughts</span>
                </div>
                <div className={styles.survivalItem}>
                  <span className={styles.survivalItemText}>Chronic Pain Or Discomfort</span>
                </div>
                <div className={styles.survivalItem}>
                  <span className={styles.survivalItemText}>Feeling Constantly On Edge</span>
                </div>
              </div>
              <div className={styles.survivalInsight}>
                <p className={styles.survivalSolution}>
                  This trauma-informed class helps your nervous system shift from survival mode back into a state of ease and regulation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 - WHY IT WORKS */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.tensionSectionTitle}>
            Why Tension and Pain Are Linked to Your Nervous System
          </h2>
          <div className={styles.tensionSectionWrapper}>
            <div className={styles.tensionImageWrapper}>
              <Image
                src="/images/qigongatlabryinth-1080x623.webp"
                alt="Qigong practice at labyrinth"
                width={1080}
                height={623}
                className={styles.tensionImage}
              />
              <p className={styles.tensionImageCaption}>
                Qigong Infused Yoga® helps your system shift from stress → safety using rhythmic, soothing, gentle movement your body instantly understands.
              </p>
            </div>
            <div className={styles.tensionContent}>
              <div className={styles.tensionTextBlock}>
                <p className={styles.tensionParagraph}>
                  Most people try to manage anxiety with the mind.
                </p>
                <p className={styles.tensionParagraph}>
                  But anxiety lives in the body—in the fascia, breath, posture, and muscles.
                </p>
                <p className={styles.tensionParagraph}>
                  When the nervous system is stuck in "always alert," it creates:
                </p>
                <ul className={styles.tensionList}>
                  <li>Muscle Bracing</li>
                  <li>Inflammation</li>
                  <li>Shallow Breathing</li>
                  <li>Chronic Pain</li>
                  <li>Difficulty Relaxing</li>
                </ul>
                <p className={styles.tensionParagraph}>
                  Until the nervous system heals, the body continues to protect itself through tension.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 - WHAT WE DO IN CLASS */}
      <section className={styles.section} id="classes">
        <div className={styles.container}>
          <div className={styles.experienceHeader}>
            <h2 className={styles.experienceTitle}>
              What You'll Experience Each Sunday
            </h2>
            <p className={styles.experienceSubtitle}>
              A gentle, comprehensive practice designed to reset your nervous system and restore your sense of peace
            </p>
          </div>
          <div className={styles.experienceGrid}>
            <div className={styles.experienceCard}>
              <div className={styles.experienceCardNumber}>01</div>
              <h3 className={styles.experienceCardTitle}>Breathwork</h3>
              <p className={styles.experienceCardDescription}>Calm anxiety and regulate the nervous system.</p>
            </div>
            <div className={styles.experienceCard}>
              <div className={styles.experienceCardNumber}>02</div>
              <h3 className={styles.experienceCardTitle}>Gentle Shaking & Tapping</h3>
              <p className={styles.experienceCardDescription}>Release stored stress through whole-body movement.</p>
            </div>
            <div className={styles.experienceCard}>
              <div className={styles.experienceCardNumber}>03</div>
              <h3 className={styles.experienceCardTitle}>Walking Meditation</h3>
              <p className={styles.experienceCardDescription}>Improve mood, balance, and focus.</p>
            </div>
            <div className={styles.experienceCard}>
              <div className={styles.experienceCardNumber}>04</div>
              <h3 className={styles.experienceCardTitle}>Circular Joint Movement</h3>
              <p className={styles.experienceCardDescription}>Soothe stiffness in shoulders, hips, and spine.</p>
            </div>
            <div className={styles.experienceCard}>
              <div className={styles.experienceCardNumber}>05</div>
              <h3 className={styles.experienceCardTitle}>Nature-Inspired Qigong</h3>
              <p className={styles.experienceCardDescription}>Ground your energy and quiet the mind.</p>
            </div>
            <div className={styles.experienceCard}>
              <div className={styles.experienceCardNumber}>06</div>
              <h3 className={styles.experienceCardTitle}>Self-Massage & Acupressure</h3>
              <p className={styles.experienceCardDescription}>Natural chronic pain relief techniques.</p>
            </div>
            <div className={styles.experienceCard}>
              <div className={styles.experienceCardNumber}>07</div>
              <h3 className={styles.experienceCardTitle}>Gentle Stretching</h3>
              <p className={styles.experienceCardDescription}>Mindful presence and body awareness.</p>
            </div>
            <div className={styles.experienceCard}>
              <div className={styles.experienceCardNumber}>08</div>
              <h3 className={styles.experienceCardTitle}>Meditation & Reflection</h3>
              <p className={styles.experienceCardDescription}>Closing practice for a peaceful week ahead.</p>
            </div>
          </div>
          <div className={styles.experienceClosing}>
            <p className={styles.experienceClosingText}>
              You'll feel calmer, lighter, and more at ease—often within the first 10 minutes.
            </p>
          </div>
          <div className={styles.experienceCtaWrapper}>
            <CtaButton className={styles.experienceCtaButton}>
              Join The Free Class
            </CtaButton>
          </div>
        </div>
      </section>

      {/* SECTION 6 - FREE GIFT */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <div className={styles.giftSectionWrapper}>
          <div className={styles.giftContent}>
            <h2 className={styles.giftTitle}>
              Free Gift When You Register
            </h2>
              <p className={styles.giftIntro}>
                Receive the <strong>Qigong Infused Yoga® 50-Minute Nervous System Healing Video</strong>—a complete home practice to help you:
              </p>
              <ul className={styles.giftBenefitsList}>
                <li>
                  <span className={styles.giftBenefitIcon}>→</span>
                  <span>Release Anxiety</span>
                </li>
                <li>
                  <span className={styles.giftBenefitIcon}>→</span>
                  <span>Soften Chronic Tension</span>
                </li>
                <li>
                  <span className={styles.giftBenefitIcon}>→</span>
                  <span>Unwind Trauma Patterns</span>
                </li>
                <li>
                  <span className={styles.giftBenefitIcon}>→</span>
                  <span>Breathe More Freely</span>
                </li>
                <li>
                  <span className={styles.giftBenefitIcon}>→</span>
                  <span>Sleep Better</span>
                </li>
                <li>
                  <span className={styles.giftBenefitIcon}>→</span>
                  <span>Reconnect To Steady, Grounded Energy</span>
                </li>
              </ul>
              <p className={styles.giftClosing}>
                This healing sequence has helped thousands—including me—find relief and reclaim peace.
              </p>
            </div>
            <div className={styles.giftCtaSection}>
              <CtaButton className={styles.giftCtaButton}>
                Free Class Link + Video
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 - ABOUT LYNNE */}
      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            Meet Your Instructor, Lynne Nicole Smith
          </h2>
          <div className={styles.aboutCard}>
            <div className={styles.aboutContent}>
              <div className={styles.lynneImageWrapper}>
                <Image
                  src="/images/lynne.png"
                  alt="Lynne Nicole Smith"
                  width={400}
                  height={500}
                  className={styles.lynneImage}
                />
              </div>
              <div className={styles.aboutText}>
                <p className={styles.bodyCopy}>
                  <strong>Founder of Qigong Infused Yoga® • Senior Trainer at the Institute of Integral Qigong & T'ai Chi</strong>
                </p>
                <p className={styles.bodyCopy}>
                  For years, I lived with the after-effects of trauma—anxiety, chronic pain, and a nervous system that didn't know how to rest.
                </p>
                <p className={styles.bodyCopy}>
                  Qigong and gentle Yoga changed everything.
                </p>
                <p className={styles.bodyCopy}>
                  After 30 years of inner work and 23+ years of teaching, these practices transformed my nervous system and inspired me to create Qigong Infused Yoga®, an accessible healing method for every age and ability.
                </p>
                <p className={styles.bodyCopy}>
                  I've taught thousands of students, Yoga teachers, therapists, older adults, and highly sensitive people.
                </p>
                <p className={styles.bodyCopy}>
                  My passion is helping others feel safe, empowered, and connected again.
                </p>
                <p className={styles.bodyCopy}>
                  I'd love to guide you too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8 - TESTIMONIALS */}
      <section className={styles.section} id="contact">
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            What Students Are Saying
          </h2>
          <div className={styles.testimonialsSection}>
            <div className={styles.zoomImageWrapper}>
              <Image
                src="/images/testimonials-zoom.jpg"
                alt="Qigong Infused Yoga class participants on Zoom"
                width={800}
                height={500}
                className={styles.zoomImage}
              />
            </div>
            <div className={styles.testimonials}>
              <div className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  "A beautiful way to begin the week."
                </p>
                <p className={styles.testimonialText}>
                  "Lynne is calming and encouraging. I always leave class more grounded, relaxed, and present."
                </p>
                <p className={styles.testimonialAuthor}>—Helen K.</p>
              </div>
              <div className={styles.testimonial}>
                <p className={styles.testimonialQuote}>
                  "My pain disappeared."
                </p>
                <p className={styles.testimonialText}>
                  "The breathwork and movements helped me release abdominal pain that hasn't returned. My life feels limitless."
                </p>
                <p className={styles.testimonialAuthor}>—Richard A.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 - FINAL CTA */}
      <section className={`${styles.section} ${styles.finalCta}`}>
        <div className={styles.container}>
          <div className={styles.finalCtaContent}>
            <h2 className={styles.finalCtaTitle}>
              Calm Your Nervous System. Ease Your Tension. Reclaim Your Peace.
            </h2>
            <div className={styles.finalCtaMessage}>
              <p className={styles.finalCtaLine}>You deserve relief.</p>
              <p className={styles.finalCtaLine}>You deserve softness.</p>
              <p className={styles.finalCtaLine}>You deserve to feel at home in your body again.</p>
            </div>
            <div className={styles.finalCtaButtonWrapper}>
              <CtaButton className={styles.ctaPrimary}>
                Join Free Class + Free Healing Video
              </CtaButton>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h3 className={styles.footerTitle}>Qigong Infused Yoga®</h3>
              <p className={styles.footerText}>
                Supporting physical, mental and emotional healing from trauma through the ancient mind-body practices of Qigong and Yoga.
              </p>
            </div>
            <div className={styles.footerColumnsGroup}>
              <div className={styles.footerSection}>
                <h4 className={styles.footerSubtitle}>Connect</h4>
                <ul className={styles.footerLinks}>
                  <li><a href="#about">About</a></li>
                  <li><a href="#classes">Classes</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className={styles.footerSection}>
                <h4 className={styles.footerSubtitle}>Social</h4>
                <ul className={styles.footerLinks}>
                  <li><a href="#facebook">Facebook</a></li>
                  <li><a href="#instagram">Instagram</a></li>
                  <li><a href="#youtube">YouTube</a></li>
                </ul>
              </div>
              <div className={styles.footerSection}>
                <h4 className={styles.footerSubtitle}>Resources</h4>
                <ul className={styles.footerLinks}>
                  <li><a href="#training">Training</a></li>
                  <li><a href="#videos">Video Subscription</a></li>
                  <li><a href="#blog">Blog</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.footerBottom}>
            <p className={styles.footerCopyright}>
              © 2026 Qigong Infused Yoga®. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
