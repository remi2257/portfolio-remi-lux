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
import { useTranslations } from "next-intl";
import { useContext, useEffect, useMemo, useState } from "react";
import { RiLoader4Fill } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

import ResumeContextProvider, { ResumeContext } from "./ResumeContext";
import {
  Language,
  Section,
  SubSection,
  generateDocumentTitle,
  languageList,
} from "./content";
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

type ResumeSubSectionProps = SubSection;

const ResumeSubSection: React.FC<ResumeSubSectionProps> = ({
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

type ResumeSectionProps = Section & {
  style?: Style;
};

const ResumeBigSection: React.FC<ResumeSectionProps> = ({
  name,
  subSectionList,

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
        // List of sub sections
        style={{ rowGap: 8 }}
      >
        {subSectionList.map((subsection, index) => (
          <ResumeSubSection key={index} {...subsection} />
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
  const { colorPalette, content } = useContext(ResumeContext);

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
                  <Text>{content.jobTitle}</Text>
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
                paddingVertical: 24,
                textAlign: "center",
                rowGap: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "bold",
                }}
              >
                {content.jobTitle}
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
              <ResumeBigSection {...content.education} />
              <ResumeBigSection {...content.skills} />
            </View>
            <ResumeBigSection
              style={{
                flex: 1,
              }}
              {...content.professionalExperience}
            />
          </View>
          <ResumeBigSection {...content.personnalProjects} />
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
  const t = useTranslations("resume");

  // -- Mandatory to avoid SSR with react-pdf
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  // -- We don't know if the PDF is ready to be displayed so we use a loading state
  const [loadingPdf, setLoadingPdf] = useState(true);

  useEffect(() => {
    if (!loadingPdf) return;

    const timeout = setTimeout(() => setLoadingPdf(false), 1500);
    return () => clearTimeout(timeout);
  }, [loadingPdf]);

  const [withPhoto, setWithPhoto] = useState(true);
  const [anonymous, setAnonymous] = useState(false);

  const [mainColor, setMainColor] = useState<Color>("blue");

  const [language, setLanguage] = useState<Language>("en");

  const documentTitle = generateDocumentTitle(language, anonymous);

  const PdfDocument = useMemo(() => {
    return (
      <ResumeContextProvider
        colorPalette={colorPaletteMap[mainColor]}
        language={language}
      >
        <Resume
          withPhoto={withPhoto}
          anonymous={anonymous}
          documentTitle={documentTitle}
        />
      </ResumeContextProvider>
    );
  }, [anonymous, documentTitle, language, mainColor, withPhoto]);

  return (
    <div className="grid items-center justify-items-center gap-x-8 sm:grid-cols-2">
      <div className="relative hidden aspect-[2/3] sm:block sm:w-80 md:w-96 lg:w-[480px]">
        {isClient && (
          <>
            <PDFViewer
              className="size-full"
              // showToolbar={false} => We show it to allow the user to realize it's a PDF viewer. But the name is the blob name :/
            >
              {PdfDocument}
            </PDFViewer>
            {loadingPdf && (
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-4 rounded bg-black/50 text-2xl font-semibold text-white backdrop-blur-sm">
                <span>{t("generating")}</span>
                <RiLoader4Fill className="size-8 animate-spin" />
              </div>
            )}
          </>
        )}
      </div>

      <div className="flex flex-col items-center gap-y-16">
        <div className="flex flex-col items-center gap-y-6">
          <div className="text-center text-2xl">{t("title")}</div>
          <div className="flex flex-col gap-x-16 gap-y-4 lg:flex-row">
            <div
              // Identity Wrapper
              className="space-y-2"
            >
              <div className="text-center text-lg">{t("identity.title")}</div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="with-photo"
                  checked={withPhoto}
                  onCheckedChange={() => {
                    setWithPhoto(v => !v);
                    setLoadingPdf(true);
                  }}
                  disabled={anonymous}
                />
                <Label htmlFor="with-photo">{t("identity.photo")}</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Switch
                  id="anonymous"
                  checked={anonymous}
                  onCheckedChange={() => {
                    setAnonymous(v => !v);
                    setLoadingPdf(true);
                  }}
                />
                <Label htmlFor="anonymous">{t("identity.anonymous")}</Label>
              </div>
            </div>
            <div
              // Theme Wrapper
              className="space-y-2"
            >
              <div className="text-center text-lg">{t("theme.title")}</div>
              <RadioGroup
                value={mainColor}
                onValueChange={(v: Color) => {
                  setMainColor(v);
                  setLoadingPdf(true);
                }}
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
                      {t(`theme.${color}`)}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
            <div
              // Language Wrapper
              className="space-y-2"
            >
              <div className="text-center text-lg">{t("language.title")}</div>
              <RadioGroup
                value={language}
                onValueChange={(v: Language) => {
                  setLanguage(v);
                  setLoadingPdf(true);
                }}
              >
                {languageList.map(language => (
                  <div key={language} className="flex items-center space-x-2">
                    <RadioGroupItem value={language} id={language} />
                    <Label htmlFor={language}>
                      {t(`language.${language}`)}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>
        </div>

        <Button
          asChild
          className={cn(loadingPdf && "opacity-80 pointer-events-none")}
        >
          {isClient ? (
            <PDFDownloadLink document={PdfDocument} fileName={documentTitle}>
              {t("download")}
            </PDFDownloadLink>
          ) : (
            <span>{t("download")}</span>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ResumeDisplay;
