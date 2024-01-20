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
import { useContext, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";

import ResumeContextProvider, { ResumeContext } from "./ResumeContext";
import {
  SmallSectionData,
  educationData,
  personnalProjectsData,
  professionalExperienceData,
  skillsData,
} from "./data";
import { Color, colorList, colorPaletteMap } from "./style";

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
      fontWeight: "semibold",
      src: "/fonts/SourceSans3-SemiBold.ttf",
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

// Avoid word breaks
Font.registerHyphenationCallback(word => [word]);

const styles = StyleSheet.create({
  px: {
    paddingHorizontal: 24,
  },
});

// ---

type ResumeSmallSectionProps = SmallSectionData;

const ResumeSmallSection: React.FC<ResumeSmallSectionProps> = ({
  name,
  nameExtra,
  subtitle,
  points,
}) => {
  return (
    <View
      style={{
        fontFamily: bodyFont,

        rowGap: 2,
      }}
    >
      <View
        // Title & Date
        style={{
          rowGap: 1,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            columnGap: 6,
          }}
        >
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              lineHeight: 1.2,
            }}
          >
            {name}
          </Text>
          {nameExtra}
        </View>
        {subtitle && (
          <Text
            style={{
              fontSize: 10,
              fontStyle: "italic",
              color: "hsl(0, 0%, 20%)",
            }}
          >
            {subtitle}
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
              fontSize: 10,
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
  dataList: SmallSectionData[];

  style?: Style;
};

const ResumeBigSection: React.FC<ResumeBigSectionProps> = ({
  name,
  dataList,

  style = {},
}) => {
  const { colorPalette } = useContext(ResumeContext);

  return (
    <View style={[{ rowGap: 6 }, style]}>
      <View
        // Title & Separator
        style={{
          rowGap: 3,
        }}
      >
        <Text
          style={{
            fontFamily: titleFont,
            fontSize: 14,
            fontWeight: "bold",

            color: colorPalette.titleFg,

            textTransform: "uppercase",
          }}
        >
          {name}
        </Text>
        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: colorPalette.titleFg,
            borderRadius: 99,
            marginLeft: -3,
          }}
        />
      </View>
      <View
        // List of small sections
        style={{ rowGap: 8 }}
      >
        {dataList.map((data, i) => (
          <ResumeSmallSection key={i} {...data} />
        ))}
      </View>
    </View>
  );
};

// -- Resume

type ResumeProps = {
  documentTitle: string;

  withPhoto?: boolean;
  anonymous?: boolean;
};

const Resume: React.FC<ResumeProps> = ({
  documentTitle,

  withPhoto,
  anonymous,
}) => {
  const { colorPalette } = useContext(ResumeContext);

  return (
    <Document title={documentTitle} author="Rémi LUX">
      <Page
        size="A4"
        style={{
          rowGap: 12,
        }}
      >
        <View
          // Header
          style={[
            styles.px,
            !anonymous
              ? {
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }
              : {},
            {
              backgroundColor: colorPalette.headerBg,
              color: "white",

              fontFamily: titleFont,
              fontSize: 15,
            },
          ]}
        >
          {!anonymous ? (
            <>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  columnGap: 24,
                  paddingVertical: withPhoto ? 0 : 16,
                }}
              >
                {withPhoto && (
                  <ImagePdf
                    src="/assets/hero-day-1.jpg"
                    style={{
                      width: 110,
                      height: 110,
                    }}
                  />
                )}
                <View>
                  <Text
                    style={{
                      fontSize: 26,
                      fontWeight: "bold",
                      marginBottom: 2,
                    }}
                  >
                    Rémi LUX
                  </Text>
                  <Text>Full-Stack Engineer</Text>
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
                <Link
                  style={{ color: "white" }}
                  src="email:remiluxpc@gmail.com"
                >
                  remiluxpc@gmail.com
                </Link>
                <Link style={{ color: "white" }} src="https://remi-lux.dev">
                  remi-lux.dev
                </Link>
              </View>
            </>
          ) : (
            <View
              style={{
                paddingVertical: 12,
                textAlign: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                Full-Stack Engineer
              </Text>
              <Text
                style={{
                  fontSize: 16,
                }}
              >
                React.js / Next.js / Node.js
              </Text>
            </View>
          )}
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
              columnGap: 28,
            }}
          >
            <View
              style={{
                width: "33%",
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

        {!anonymous && (
          <View
            // Footer
            style={[
              styles.px,
              {
                marginTop: 8,

                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",

                paddingVertical: 8,

                backgroundColor: colorPalette.headerBg,
                color: "white",

                fontFamily: bodyFont,
                fontSize: 14,
                fontWeight: "semibold",
              },
            ]}
          >
            <View
              //LinkedIn
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 10,
              }}
            >
              <ImagePdf
                src="/assets/linkedin.png"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Link
                style={{ color: "white" }}
                src="https://www.linkedin.com/in/remilux/"
              >
                Rémi Lux
              </Link>
            </View>
            <View
              //GitHub
              style={{
                flexDirection: "row",
                alignItems: "center",
                columnGap: 10,
              }}
            >
              <ImagePdf
                src="/assets/github.png"
                style={{
                  width: 20,
                  height: 20,
                }}
              />
              <Link
                style={{ color: "white" }}
                src="https://www.github.com/remi2257"
              >
                remi2257
              </Link>
            </View>
          </View>
        )}
      </Page>
    </Document>
  );
};

// --- ResumeDisplay

const ResumeDisplay: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  const [withPhoto, setWithPhoto] = useState(true);
  const [anonymous, setAnonymous] = useState(false);

  const [mainColor, setMainColor] = useState<Color>("blue");

  const documentTitle = !anonymous ? "LUX_REMI_CV" : "FULL_STACK_ENGINEER_CV";

  const PdfDocument = (
    <ResumeContextProvider colorPalette={colorPaletteMap[mainColor]}>
      <Resume
        withPhoto={withPhoto}
        anonymous={anonymous}
        documentTitle={documentTitle}
      />
    </ResumeContextProvider>
  );

  return (
    <div className="grid items-center justify-items-center gap-x-8 sm:grid-cols-2">
      {isClient && (
        <>
          <PDFViewer
            className="hidden aspect-[2/3] w-[500px] sm:block"
            // showToolbar={false}
          >
            {PdfDocument}
          </PDFViewer>

          <div className="flex flex-col items-center gap-y-12">
            <div className="flex flex-col items-center gap-y-4">
              <div className="text-center text-2xl">
                Customise my resume to your needs
              </div>
              <div className="flex gap-x-16">
                <div className="space-y-2">
                  <div className="text-center text-lg">Identity</div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="with-photo"
                      checked={withPhoto}
                      onCheckedChange={() => setWithPhoto(v => !v)}
                      disabled={anonymous}
                    />
                    <Label htmlFor="with-photo">Photo</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="anonymous"
                      checked={anonymous}
                      onCheckedChange={() => setAnonymous(v => !v)}
                    />
                    <Label htmlFor="anonymous">Anonymous</Label>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-center text-lg">Theme</div>
                  <RadioGroup
                    value={mainColor}
                    onValueChange={(v: Color) => setMainColor(v)}
                  >
                    {colorList.map(color => (
                      <div key={color} className="flex items-center space-x-2">
                        <RadioGroupItem value={color} id={color} />
                        <Label
                          htmlFor={color}
                          style={{
                            color: colorPaletteMap[color].headerBg,
                          }}
                        >
                          {colorPaletteMap[color].name}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              </div>
            </div>

            <Button asChild>
              <PDFDownloadLink document={PdfDocument} fileName={documentTitle}>
                Download PDF
              </PDFDownloadLink>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default ResumeDisplay;
