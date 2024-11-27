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
import { useEffect, useMemo, useState } from "react";
import { RiLoader4Fill } from "react-icons/ri";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { useHandledLocale } from "@/hooks/useHandledLocale";
import { cn } from "@/lib/utils";

import ResumeContextProvider, { useResumeContext } from "./ResumeContext";
import { Section, SubSection } from "./_content/content.type";
import {
  candidateName,
  contactEmail,
  contactPhone,
  currentLocation,
  portfolioLink,
  professionalTitle,
} from "./const";
import { Language, languageList } from "./resume-lang";
import { Color, colorList, colorPaletteMap } from "./style";
import { generateDocumentTitle } from "./utils";

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

        rowGap: 3,
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
              fontSize: 13,
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
              fontSize: 11,
              fontStyle: "italic",
              color: "hsl(0, 0%, 20%)",
            }}
          >
            {subtitle}
          </Text>
        )}
      </View>
      <View
        style={{
          rowGap: 4,
          fontSize: 11,
          lineHeight: 1.25,
        }}
      >
        {points.map((point, i) => (
          <View
            key={i}
            style={{
              flexDirection: "row",
              columnGap: 3,
            }}
          >
            {points.length > 1 && <Text>•</Text>}
            <Text>{point}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

type ResumeSectionProps = {
  name: string;
  subSectionList: SubSection[];
  style?: Style;
};

const ResumeSection: React.FC<ResumeSectionProps> = ({
  name,
  subSectionList,

  style = {},
}) => {
  const { colorPalette } = useResumeContext();

  return (
    <View style={[{ rowGap: 8 }, style]}>
      <View
        // Title & Separator
        style={{
          rowGap: 3,
        }}
      >
        <Text
          style={{
            fontFamily: titleFont,
            fontSize: 16,
            fontWeight: "bold",

            color: colorPalette.titleFg,

            textTransform: "uppercase",
          }}
        >
          {name}
        </Text>
        <View
          // Separator
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
        style={{ rowGap: 12 }}
      >
        {subSectionList.map((subsection, index) => (
          <ResumeSubSection key={index} {...subsection} />
        ))}
      </View>
    </View>
  );
};

function sectionToResumeSection<T extends string>(
  section: Section<T>,
  order: T[]
): Omit<ResumeSectionProps, "style"> {
  return {
    name: section.name,
    subSectionList: order.map(key => section.subSectionRecord[key]),
  };
}

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
  const { colorPalette, content } = useResumeContext();

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
                      width: 120,
                      height: 120,
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
                    {candidateName}
                  </Text>
                  <Text>{professionalTitle}</Text>
                  <Text>{content.headerSubtitle}</Text>
                </View>
              </View>

              <View
                style={{
                  alignItems: "flex-end",
                }}
              >
                <Text>{currentLocation}</Text>
                <Text>{contactPhone}</Text>
                <Link style={{ color: "white" }} src={`mailto:${contactEmail}`}>
                  {contactEmail}
                </Link>
                <Link style={{ color: "white" }} src={portfolioLink}>
                  {portfolioLink}
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
                {professionalTitle}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                }}
              >
                {content.headerSubtitle}
              </Text>
            </View>
          )}
        </View>

        <View
          // Body
          style={[
            styles.px,
            {
              flexDirection: "row",
              columnGap: 24,
            },
          ]}
        >
          <View
            // Left column
            style={{
              width: "34%",
              rowGap: 16,
            }}
          >
            <ResumeSection
              {...sectionToResumeSection(content.education, [
                "phelma",
                "prepa",
              ])}
            />
            <ResumeSection
              {...sectionToResumeSection(content.skills, ["web", "misc"])}
            />
            <ResumeSection
              {...sectionToResumeSection(content.personalProjects, [
                "tgvMaxExtra",
                "sudokuSolver",
              ])}
            />
          </View>

          <ResumeSection
            // Right column
            style={{
              flex: 1,
            }}
            {...sectionToResumeSection(content.professionalExperience, [
              "meero",
              "freelance",
              "forssea",
              "niryo",
            ])}
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

                paddingVertical: 10,

                backgroundColor: colorPalette.headerBg,
                color: "white",

                fontFamily: bodyFont,
                fontSize: 16,
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
                src="https://www.linkedin.com/in/remi-lux/"
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

type ResumeDisplayProps = {
  showPdf: boolean;
};

const ResumeDisplay: React.FC<ResumeDisplayProps> = ({ showPdf }) => {
  const t = useTranslations("resume");

  // -- Mandatory to avoid SSR with react-pdf
  const [isClient, setIsClient] = useState(false);
  useEffect(() => setIsClient(true), []);

  // -- We don't know if the PDF is ready to be displayed so we use a loading state
  const [loadingPdf, setLoadingPdf] = useState(true);

  // Effect to clear the loading state after a delay
  useEffect(() => {
    if (!loadingPdf) {
      return;
    }

    const timeout = setTimeout(() => setLoadingPdf(false), 1500);
    return () => clearTimeout(timeout);
  }, [loadingPdf]);

  const [withPhoto, setWithPhoto] = useState(true);
  const [anonymous, setAnonymous] = useState(false);

  const [mainColor, setMainColor] = useState<Color>("blue");

  const [language, setLanguage] = useState<Language>(useHandledLocale());

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
    <div
      className={cn(
        "grid items-center justify-items-center gap-8",
        showPdf && "sm:grid-cols-2"
      )}
    >
      {showPdf && (
        <div className="relative aspect-[2/3] sm:w-80 md:w-96 lg:w-[480px] 3xl:w-[560px]">
          {isClient && (
            <PDFViewer
              className="size-full"
              // showToolbar={false} => We show it to allow the user to realize it's a PDF viewer. But the name is the blob name :/
            >
              {PdfDocument}
            </PDFViewer>
          )}
          {loadingPdf && (
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded bg-black/50 text-lg font-semibold text-white backdrop-blur-sm lg:gap-y-4 lg:text-xl">
              <span>{t("generating")}</span>
              <RiLoader4Fill className="size-6 animate-spin lg:size-8" />
            </div>
          )}
        </div>
      )}
      <div className="flex flex-col items-center gap-y-16">
        <div className="flex flex-col items-center gap-y-6">
          <div className="text-pretty text-center text-2xl">{t("title")}</div>
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
          className={cn(loadingPdf && "pointer-events-none opacity-80")}
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
