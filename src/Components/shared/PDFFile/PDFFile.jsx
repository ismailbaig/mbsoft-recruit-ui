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
    color:"red",
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
        <Text style={styles.header}>
          MB SOFT SERVICES
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
          companies in online platform.
        </Text>
        <Text style={styles.subHeading}>2D & 3D MODELING</Text>
        <Text style={styles.text}>
          BIM is a process of converting laser scan survey data into a Building
          Information Model (BIM) ready model. Laser-Scan to BIM creates the 3D
          model of the building, showing its detailed geometry. Scan2CAD
          achieves accurate raster-to-vector conversions using a wide range of
          technologies. Most notably these are object recognition (Scan2CAD
          recognizes elements in your original image and converts them to the
          correct objects. Dash-lines become CAD dash-line objects, arcs become
          CAD arc objects, and so-on) and OCR (Scan2CAD recognizes text in your
          original image and converts the text to fully editable CAD text
          strings). Scan2BIM is the process of 3D Laser Scanning a physical
          space, site or a construction in order to create a highly accurate
          digital representation. The digital model is including all the
          information of the surfaces, the constructions, the materials and the
          colors. The representation can be used for designing, assessing
          progress or evaluating options. LIDAR is a remote sensing technology.
          LiDAR technology uses the pulse from a laser to collect measurements.
          These are used to create 3D models and maps of objects and
          environments.
        </Text>

        <Text style={styles.subHeading}>ABOUT US</Text>
        <Text style={styles.text}>
          We @ MBsoft Technologies provide variety of services which includes
          web design and development, Android and iOS apps, desktop application,
          2D & 3D Modeling and digital marketing. Our team has a wide range of
          skills and expertise and we always put our client’s satisfaction
          first. Our aim is to push boundaries of design with likeminded teams
          within the industry and BIM enhances this, whether it’s old or new,
          large or small, we aim to make every project we work on as
          collaborative as possible and adopt BIM Stage 2 processes as a
          default.
        </Text>

        <Text style={styles.subHeading}>WHY US</Text>
        <Text style={styles.text}>
          Exceptional services, High quality development Extensive experience,
          Good branding Strategic process & On time delivery
        </Text>

        <Text style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
        />
      </Page>
    </Document>
  );
};

export default PDFFile;
