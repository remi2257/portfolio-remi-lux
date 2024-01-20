"use client";

import {
  Document,
  Font,
  Image as ImagePdf,
  Link,
  PDFDownloadLink,
  PDFViewer,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { Style } from "@react-pdf/types";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";

import {
  SmallSectionData,
  educationData,
  personnalProjectsData,
  professionalExperienceData,
  skillsData,
} from "./data";
import { Colors } from "./style";

const DOCUMENT_NAME = "LUX_REMI_CV";

const titleFont = "Century Gothic";
Font.register({
  family: titleFont,
  fonts: [
    {
      fontWeight: "normal",
      src: "/fonts/CenturyGothic.ttf",
    },
    {
      fontWeight: "bold",
      src: "/fonts/CenturyGothic-Bold.ttf",
    },
  ],
});

const bodyFont = "Source Sans";
Font.register({
  family: bodyFont,
  fonts: [
    {
      fontWeight: "normal",
      src: "/fonts/SourceSans3-Regular.ttf",
    },
    {
      fontWeight: "bold",
      src: "/fonts/SourceSans3-Bold.ttf",
    },
    {
      fontWeight: "normal",
      fontStyle: "italic",
      src: "/fonts/SourceSans3-Italic.ttf",
    },
  ],
});

const styles = StyleSheet.create({
  px: {
    paddingHorizontal: 24,
  },
});

type ResumeSmallSectionProps = SmallSectionData;

const ResumeSmallSection: React.FC<ResumeSmallSectionProps> = ({
  name,
  subtitle: date,
  points,
}) => {
  return (
    <View
      style={{
        fontFamily: bodyFont,

        rowGap: 4,
      }}
    >
      <View>
        <Text
          style={{
            fontSize: 11,
            fontWeight: "bold",
            lineHeight: 1.2,
          }}
        >
          {name}
        </Text>
        {date && (
          <Text
            style={{
              fontSize: 10,
              fontStyle: "italic",
            }}
          >
            {date}
          </Text>
        )}
      </View>
      <View
        style={
          {
            // rowGap: 2,
          }
        }
      >
        {points.map((point, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              columnGap: 1,
              fontSize: 9,
            }}
          >
            {points.length > 1 && <Text>•</Text>}
            <Text
              style={{
                marginLeft: 2,
                lineHeight: 1.15,
              }}
            >
              {point}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

type ResumeBigSectionProps = {
  name: string;
  style?: Style;
  dataList: SmallSectionData[];
};

const ResumeBigSection: React.FC<ResumeBigSectionProps> = ({
  name,
  style = {},
  dataList,
}) => {
  return (
    <View style={[{ rowGap: 8 }, style]}>
      <View
        style={{
          rowGap: 4,
        }}
      >
        <Text
          style={{
            fontFamily: titleFont,
            fontSize: 12,
            fontWeight: "bold",

            color: Colors.title,

            textTransform: "uppercase",

            marginLeft: 4,
          }}
        >
          {name}
        </Text>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: Colors.title,
            borderRadius: 99,
          }}
        />
      </View>
      {dataList.map((data, i) => (
        <ResumeSmallSection key={i} {...data} />
      ))}
    </View>
  );
};

// -- Resume

const Resume: React.FC = () => {
  return (
    <Document title={DOCUMENT_NAME}>
      <Page
        size="A4"
        style={{
          rowGap: 16,
        }}
      >
        <View
          // Header
          style={[
            styles.px,
            {
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",

              backgroundColor: Colors.headerBg,
              color: "white",

              fontFamily: titleFont,
              fontSize: 14,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              columnGap: 24,
            }}
          >
            <ImagePdf
              src="/assets/hero-day-1.jpg"
              style={{
                width: 110,
                height: 110,
              }}
            />
            <View>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                  marginBottom: 2,
                }}
              >
                Rémi LUX
              </Text>
              <Text>Ingénieur Full-Stack</Text>
              <Text>React.js / Next.js / Node.js</Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <Text>Paris - France</Text>
            <Text>+33 6 31 20 55 88</Text>
            <Link style={{ color: "white" }} src="email:remiluxpc@gmail.com">
              remiluxpc@gmail.com
            </Link>
            <Link style={{ color: "white" }} src="https://remi-lux.dev">
              remi-lux.dev
            </Link>
          </View>
        </View>

        <View
          // Body
          style={[
            styles.px,

            {
              rowGap: 16,
            },
          ]}
        >
          <View
            style={{
              flexDirection: "row",
              columnGap: 24,
            }}
          >
            <View
              style={{
                width: "28%",
                rowGap: 16,
              }}
            >
              <ResumeBigSection name="Education" dataList={educationData} />
              <ResumeBigSection name="Skills" dataList={skillsData} />
            </View>
            <ResumeBigSection
              name="Professional experience"
              style={{
                flex: 1,
              }}
              dataList={professionalExperienceData}
            />
          </View>
          <ResumeBigSection
            name="Personal projects"
            dataList={personnalProjectsData}
          />
        </View>

        <View
          // Footer
          style={[
            styles.px,
            {
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",

              paddingVertical: 8,

              backgroundColor: Colors.headerBg,
              color: "white",

              fontFamily: bodyFont,
              fontSize: 16,
              fontWeight: "bold",
            },
          ]}
        >
          <View
          //LinkedIn
          >
            <Link
              style={{ color: "white" }}
              src="https://www.linkedin.com/in/remilux/"
            >
              Rémi Lux
            </Link>
          </View>
          <View
          //GitHub
          >
            <Link
              style={{ color: "white" }}
              src="https://www.github.com/remi2257"
            >
              remi2257
            </Link>
          </View>
        </View>
      </Page>
    </Document>
  );
};

// --- ResumeDisplay

const ResumeDisplay: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  return (
    <div className="grid grid-cols-2 items-center justify-items-center gap-x-8">
      {isClient && (
        <>
          <PDFViewer
            className="aspect-[2/3] w-[500px]"
            // showToolbar={false}
          >
            <Resume />
          </PDFViewer>

          <Button asChild>
            <PDFDownloadLink document={<Resume />} fileName={DOCUMENT_NAME}>
              Download
            </PDFDownloadLink>
          </Button>
        </>
      )}
    </div>
  );
};

export default ResumeDisplay;
