import React from "react";
import { Page, Text, Image, Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
  },
  subHeading: {
    margin: 45,
    fontSize: 14,
    textAlign: "justify",
    fontFamily: "Times-Roman",
    color: "red",
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 50,
    marginBottom: 20,
    textAlign: "center",
    color: "green",
  },
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

const PDFFile = () => {
  return (
    <Document>
      <Page style={styles.body}>
        <Text style={styles.header}>ZELTON SERVICES</Text>
        <Text style={styles.subHeading}>WELCOME TO IT SERVICES</Text>
        <Text style={styles.text}>
          At @ZeltonServices, we are dedicated to providing top-notch IT
          consultancy services tailored to your unique business needs. With a
          team of seasoned professionals and cutting-edge technology solutions,
          we empower organizations to thrive in the digital age. Our
          comprehensive IT consultancy services encompass everything from
          technology assessment and strategic planning to seamless
          implementation and ongoing support. We work closely with your team to
          understand your objectives and challenges, ensuring that our solutions
          align perfectly with your business goals. Whether you're seeking to
          optimize your existing IT infrastructure, explore innovative
          technologies, or enhance your cybersecurity measures, we're here to
          guide you every step of the way. Our commitment to excellence and a
          client-first approach sets us apart in the industry. Welcome to a
          world of limitless IT possibilities. Discover how @ZeltonServices can
          transform your business's technology landscape and drive growth and
          success. Let's embark on this digital journey together.
        </Text>
        <Text style={styles.subHeading}>WEBSITE DEVELOPMENT</Text>
        <Text style={styles.text}>
          We design and develop custom application for Android and iOS platforms
          with complete planning and research for domains such as education,
          health care, transportation, travel, finance, logistics, wellness and
          fitness, retail, events, etc. With the use of latest tools we provide
          unique and creative web applications made from scratch, compatible
          with all platforms satisfying the needs of our customers. We also
          provide several customised applications for promoting small scale
          companies in online platform.Exceptional services, High quality
          development Extensive experience, Good branding Strategic process & On
          time delivery."Responsive Design": In today's mobile-driven world, a
          responsive website is non-negotiable. Our websites are designed and
          developed to be fully responsive, adapting seamlessly to various
          screen sizes and devices. This ensures that your audience can access
          your website anytime, anywhere, and on any device, providing a
          consistent and user-friendly experience. "Elevating E-Commerce": For
          businesses looking to sell products or services online, our e-commerce
          solutions are designed to drive success. We create secure,
          feature-rich online stores that streamline transactions, manage
          inventory, and boost revenue. Our e-commerce expertise ensures that
          your online business is set up for growth and scalability.
          "Performance and Speed": We understand the importance of fast-loading
          websites. Our development process includes optimization techniques to
          ensure that your website loads quickly and efficiently. This not only
          enhances user experience but also positively impacts search engine
          rankings.
        </Text>
        <br />
        <Text style={styles.subHeading}>About us</Text>
        <Text style={styles.text}>
          We @ZeltonServices provide variety of services which includes web
          design and development, Android and iOS apps, desktop application, 2D
          & 3D Modeling and digital marketing. Our team has a wide range of
          skills and expertise and we always put our client’s satisfaction
          first. Our aim is to push boundaries of design with likeminded teams
          within the industry and BIM enhances this, whether it’s old or new,
          large or small, we aim to make every project we work on as
          collaborative as possible and adopt BIM Stage 2 processes as a
          default.
        </Text>

        <Text style={styles.subHeading}>Why Choose Us</Text>
        <Text style={styles.text}>
          Choosing the right IT partner is crucial for your business's success.
          At @ZeltonServices, we stand out for our unwavering commitment to
          excellence, innovation, and client satisfaction. Our team of experts
          brings years of experience and industry knowledge to the table. We
          prioritize your unique needs and goals, delivering customized
          solutions that drive results. Discover why businesses trust us for
          their IT need.
        </Text>

        <Text style={styles.subHeading}>Our Approach</Text>
        <Text style={styles.text}>
          Our approach to IT solutions is rooted in collaboration, innovation,
          and efficiency. We work closely with you to understand your specific
          challenges and objectives. From there, we develop a tailored strategy
          that leverages technology to address your pain points and seize
          opportunities. Our agile methodology ensures timely delivery and the
          flexibility to adapt to changing business landscapes.
        </Text>

        <Text style={styles.subHeading}>Client Success Stories</Text>
        <Text style={styles.text}>
          Our clients' success stories are a testament to the impact of our IT
          solutions. We take pride in helping businesses of all sizes and
          industries achieve their goals through technology. Explore our case
          studies to see how we've transformed organizations, improved
          efficiency, and enhanced security
        </Text>
        <Text style={styles.subHeading}>Security and Compliance</Text>
        <Text style={styles.text}>
          Security and compliance are at the forefront of our IT services. We
          understand the importance of protecting your data and ensuring
          regulatory compliance. Our team specializes in cybersecurity, risk
          management, and compliance solutions. Rest easy knowing that your
          technology infrastructure is secure and aligned with industry
          standards
        </Text>

        <Text style={styles.subHeading}>Technology Insights</Text>
        <Text style={styles.text}>
          Stay informed about the latest technology trends, best practices, and
          industry insights with our technology blog. Our experts share valuable
          knowledge to help you make informed decisions and stay ahead of the
          curve in the ever-changing tech landscape.
        </Text>
        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;
