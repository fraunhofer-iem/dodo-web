import React from "react";
import { Typography } from "@material-ui/core";
import ContentWrapper from "../home/SectionWrapper";

const Impressum = () => {
  const box = {
    marginLeft: "10rem",
    marginRight: "10rem",
  };

  return (
    <ContentWrapper
      variant="h3"
      title="Impressum"
      contentColor={"primary.main"}
      background={"#fff"}
    >
      <Typography sx={box} variant="h4" color="textSecondary" component="div">
        Editorial Notes
      </Typography>
      <Typography
        sx={box}
        variant="body2"
        color="textSecondary"
        component="div"
      >
        <p>
          The Fraunhofer Institute for Mechatronic Systems Design IEM is a
          constituent entity of the Fraunhofer-Gesellschaft, and as such has no
          separate legal status.
        </p>
        <p>
          Fraunhofer-Gesellschaft
          <br />
          zur Förderung der angewandten Forschung e.V. <br />
          Hansastraße 27 c <br />
          80686 München <br />
          Phone: +49 89 1205- 0<br />
          Fax: +49 89 1205-7531 <br />
          www.fraunhofer.de <br />
          VAT Identification Number in accordance with §27 a VAT Tax Act: DE
          129515865
        </p>
        <p>
          Court of jurisdiction Amtsgericht München (district court)
          <br />
          Registered nonprofit association Registration no. VR 4461
          <br />
          Responsible editor: Jan-Niclas Str&uuml;wer <br />
          jan-niclas.struewer(at)iem.fraunhofer.de
        </p>
      </Typography>

      <Typography sx={box} variant="h4" color="textSecondary" component="div">
        Executive Board
      </Typography>
      <Typography
        sx={box}
        variant="body2"
        color="textSecondary"
        component="div"
      >
        <p>
          Prof. Dr.-Ing. Reimund Neugebauer, President, Corporate Policy and
          Research Management
          <br />
          Prof. Dr. Ralf Boris Wehrspohn, Technology Marketing and Business
          Models
          <br />
          Prof. Dr. Alexander Kurz, Human Resources, Legal Affairs and IP
          Management
          <br />
          Dipl.-Kfm. Andreas Meuer, Finances and Digitization
        </p>
      </Typography>
      <Typography sx={box} variant="h4" color="textSecondary">
        Usage Rights
      </Typography>
      <Typography
        sx={box}
        variant="body2"
        color="textSecondary"
        component="div"
      >
        <p>
          Copyright © by <br />
          Fraunhofer-Gesellschaft <br />
          All rights reserved. <br />
          All copyright for this Web site are owned in full by the
          Fraunhofer-Gesellschaft. component="div"
        </p>
        <p>
          Permission is granted to download or print material published on this
          site for personal use only. Its use for any other purpose, and in
          particular its commercial use or distribution, are strictly forbidden
          in the absence of prior written approval. Please address your requests
          for approval to:
        </p>
        <p>
          Fraunhofer Institute for Institute for Mechatronic Systems Design IEM{" "}
          <br />
          info@iem.fraunhofer.de
        </p>
        <p>
          Notwithstanding this requirement, material may be downloaded or
          printed for use in connection with press reports on the activities of
          the Fraunhofer-Gesellschaft and its constituent institutes, on
          condition that the following terms are complied with:
        </p>
        <p>
          No alterations may be made to pictorial content, with the exception of
          framing modifications to emphasize the central motif. The source must
          be quoted and two free reference copies must be sent to the
          above-mentioned address. Such usage is free of charge.
        </p>
      </Typography>
      <Typography sx={box} variant="h4" color="textSecondary">
        Disclaimer
      </Typography>
      <Typography
        sx={box}
        variant="body2"
        color="textSecondary"
        component="div"
      >
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
    </ContentWrapper>
  );
};

export default Impressum;
