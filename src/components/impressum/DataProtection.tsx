import React from "react";
import { Typography } from "@material-ui/core";
import ContentWrapper from "../home/SectionWrapper";

const DataProtection = () => {
  const box = {
    marginLeft: "10rem",
    marginRight: "10rem",
  };
  return (
    <ContentWrapper
      variant="h3"
      title="Data Protection Information"
      contentColor={"primary.main"}
      background={"#fff"}
    >
      <Typography sx={box} variant="h4" color="textSecondary">
        DoDo
      </Typography>
      <Typography
        sx={box}
        variant="body2"
        color="textSecondary"
        component="div"
      >
        <p>
          DoDo is a project of the Fraunhofer Institute for Mechatronic Systems
          Design IEM.
        </p>
        <p>
          The following pertains to the use of this website. As the data
          controller, we process your personal data collected via our website
          and store them for the period necessary to achieve the specified
          purposes and to comply with statutory requirements. The following text
          informs you of the data we collect, the way we process them and to
          which rights you will be entitled to in this regard.
        </p>
        <p>
          Pursuant to Article 4(1) General Data Protection Regulation (GDPR),
          personal data are all data referring to an identified or identifiable
          natural person.
        </p>
      </Typography>

      <Typography sx={box} variant="h4" color="textSecondary">
        1. Scope of this Document
      </Typography>
      <Typography sx={box} variant="body2" color="textSecondary">
        This data protection information shall apply to the project website
        located at https://fraunhofer-iem.github.io/dodo-web
      </Typography>
      <Typography sx={box} variant="h4" color="textSecondary">
        2. Name and Contact Information of the Person Responsible for Data
        Processing (Controller) and of the corporate Data Protection Officer
      </Typography>
      <Typography
        sx={box}
        variant="body2"
        color="textSecondary"
        component="div"
      >
        <p>
          Controller as defined in Article 4(7) GDPR: <br />
          Fraunhofer-Gesellschaft
          <br />
          zur Förderung der angewandten Forschung e.V.
          <br />
          Hansastraße 27 c,
          <br />
          80686 Munich
          <br />
          for Fraunhofer IEM, Zukünftsmeile 1, 33102, Paderborn
          <br />
          (hereinafter referred to "Fraunhofer IEM")
        </p>
        <p>
          Email: info@iem.fraunhofer.de
          <br />
          Telephone: +49 5251 5465-101
          <br />
          Fax: +49 5251 5465-102
        </p>
        <p>
          You can reach the Data Protection Officer at Fraunhofer at the above
          address c/o Data Protection Officer or at
          datenschutz@zv.fraunhofer.de. Please feel free to contact our Data
          Protection Officer directly at any time with your questions concerning
          the Data Protection Law or your rights as data subject. Alternatively,
          you may want to send an email to your contact partner Dr. Matthias
          Meyer at matthias.meyer@iem.fraunhofer.de.
        </p>
      </Typography>
      <Typography sx={box} variant="h4" color="textSecondary">
        3. Processing of Personal Data and Purposes of Data Processing
      </Typography>
      <Typography
        sx={box}
        variant="body2"
        color="textSecondary"
        component="div"
      >
        <p>During your Website Visit</p>
        <p>
          We cannot assume any liability for the content of external pages.
          Solely the operators of those linked pages are responsible for their
          content.
        </p>
        <p>
          We make every reasonable effort to ensure that the content of this Web
          site is kept up to date, and that it is accurate and complete.
          Nevertheless, the possibility of errors cannot be entirely ruled out.
          We do not give any warranty in respect of the timeliness, accuracy or
          completeness of material published on this Web site, and disclaim all
          liability for (material or non-material) loss or damage incurred by
          third parties arising from the use of content obtained from the Web
          site.
        </p>
        <p>
          Registered trademarks and proprietary names, and copyrighted text and
          images, are not generally indicated as such on our Web pages. But the
          absence of such indications in no way implies that these names, images
          or text belong to the public domain in the context of trademark or
          copyright law.
        </p>
      </Typography>
      <Typography sx={box} variant="h4" color="textSecondary">
        4. Transfer of Personal Data to Third Parties
      </Typography>
      <Typography
        sx={box}
        variant="body2"
        color="textSecondary"
        component="div"
      >
        <p>We only forward your personal data to third parties if:</p>

        <ul>
          <li>
            You consented explicitly pursuant to point (a) of the first sentence
            of Article 6(1) GDPR,
          </li>
          <li>
            The data transfer is necessary pursuant to point (b) of the first
            sentence of Article 6(1) GDPR for the performance of a contract with
            you,
          </li>
          <li>
            We are legally obligated to transmit the data pursuant to point (c)
            of the first sentence of Article 6(1) of GDPR.
          </li>
        </ul>

        <p>
          Third parties may use the transferred data only for the
          above-mentioned purposes. <br />
          The transfer of personal data to countries outside the EU or an
          international organization shall be excluded.
        </p>
      </Typography>
      <Typography sx={box} variant="h4" color="textSecondary">
        5. Your Rights as a Data Subject
      </Typography>
      <Typography
        sx={box}
        variant="body2"
        color="textSecondary"
        component="div"
      >
        <p>You have the following rights:</p>
        <ul>
          <li>
            Pursuant to Article 7(3) GDPR, you have the right to withdraw at any
            time any consent you may have given to us before. The consequence of
            this is that we may no longer continue the respective activity.
          </li>
          <li>
            Pursuant to Article 15 GDPR, you have the right to obtain
            information on your personal data which we have processed. In
            particular, you have the right to information on the following:
            Purposes of data processing, the category of the personal data, the
            categories of recipients to whom your data has been or is disclosed,
            the planned storage periods of data, the existence of a right to the
            correction, deletion, restriction of processing and objection, the
            right to appeal, the right to know the origin of your data in the
            event that we did not collect these data The right to meaningful and
            detailed information on the existence of automated decision-making
            including profiling and, if applicable, relevant information on the
            details thereof;
          </li>
          <li>
            Pursuant to Article 16 GDPR, you have the right to obtain without
            undue delay the rectification of inaccurate personal data and/or the
            completion of incomplete personal data stored with us;
          </li>

          <li>
            Pursuant to Article 17 GDPR, you have the right to the erasure of
            your personal data unless the erasure interferes with the execution
            of the right to free expression of opinions and to information, with
            the compliance with legal obligations, is necessary in the public
            interest or for establishing, exercising or defending legal claims;
          </li>
          <li>
            Pursuant to Article 18 GDPR, you have the right to restriction of
            processing of your personal data if you contest or challenge the
            accuracy of these data, the processing of the data is unlawful but
            you oppose the erasure of these data and we no longer need the data
            while you still need the data to establish, exercise or defend legal
            claims or you have raised an objection against the data processing
            pursuant to Article 21 GDPR;
          </li>
          <li>
            Pursuant to Article 20 GDPR, you have the right to receive the
            personal data concerning you in a structured, commonly used and
            machine-readable format or to demand to transmit those data to
            another data processing controller and
          </li>
          <li>
            Pursuant to Article 77 GDPR, you have the right to lodge a complaint
            with a supervisory authority. Generally, you may find such authority
            at your place of habitual residence, your workplace or our company
            domicile.
          </li>
        </ul>
        <p>
          Information about your right to object pursuant to Article 21 GDPR{" "}
        </p>
        <p>
          You have the right to object at any time, on grounds relating to your
          particular situation, to the processing of your personal data,
          pursuant to point (e) of Article 6(1) GDPR (data processing for the
          performance of a task carried out in the public interest) and of point
          (f) of Article 6(1) GDPR (data processing on the basis of legitimate
          interests). This shall also apply to profiling as prescribed by
          Article 4(4) GDPR, which is based on this provision.
        </p>
        <p>
          Once you file an objection, we will no longer process your personal
          data unless we can demonstrate compelling legitimate grounds for
          processing which override your interests, rights and freedoms, or
          unless the processing serves the establishment, exercise or defense of
          legal claims.
        </p>
        <p>
          To the extent that your objection addresses the processing of data for
          direct advertising, we will stop the processing immediately. In this
          case, citing a specific situation is not required. This shall also
          apply to profiling in as far as it relates to such direct advertising.
        </p>
        <p>
          If you would like to assert your right to object, an email to
          datenschutz@zv.fraunhofer.de will suffice.
        </p>
      </Typography>

      <Typography sx={box} variant="h4" color="textSecondary">
        6. Data security
      </Typography>
      <Typography
        sx={box}
        variant="body2"
        color="textSecondary"
        component="div"
      >
        <p>
          Moreover, we use suitable technical and organizational safety
          procedures to protect your data against accidental or willful
          manipulation, partial or complete loss, destruction or against the
          unauthorized access by third parties. We constantly improve these
          security measures as the technology advances.
        </p>
        <p>
          We transmit all your personal data using the widely used and secure
          TLS (Transport Layer Security) encryption standard. The TLS protocol
          is a proven and secure standard that is also used in online banking
          transactions. You will recognize a secure TLS connection by the s
          following the http (https://...) in your browser URL or by the lock
          symbol in the lower section of your browser.
        </p>
      </Typography>

      <Typography sx={box} variant="h4" color="textSecondary">
        7. Timeliness and Amendments to this Data Protection Information
      </Typography>
      <Typography
        sx={box}
        variant="body2"
        color="textSecondary"
        component="div"
      >
        <p>
          This data protection information as amended on November 2018 is
          currently applicable.
        </p>
        <p>
          Due to improvements of our website and website offers or by virtue of
          amended statutory or administrative standards, it may become necessary
          to amend this data protection information. You may find the latest
          data protection information by clicking the link on this website
        </p>
        <p>
          You may read or print this updated and amended version at any time.
        </p>
      </Typography>
    </ContentWrapper>
  );
};

export default DataProtection;
