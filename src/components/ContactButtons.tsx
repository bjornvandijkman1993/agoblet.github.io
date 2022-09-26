import * as React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { IconButton, SxProps } from "@mui/material";

export function ContactButtons() {
  return (
    <React.Fragment>
      <ContactButton
        href="https://github.com/agoblet"
        ariaLabel="Visit my Github"
      >
        <GitHubIcon />
      </ContactButton>
      <ContactButton
        href="https://www.linkedin.com/in/axel-goblet-5325327a"
        ariaLabel="Visit my LinkedIn"
      >
        <LinkedInIcon />
      </ContactButton>
      <ContactButton href="mailto:a.goblet@hotmail.com" ariaLabel="Email me">
        <EmailIcon />
      </ContactButton>
    </React.Fragment>
  );
}

type ContactButtonProps = {
  href: string;
  children: React.ReactNode;
  sx?: SxProps;
  ariaLabel: string;
};

function ContactButton({ href, children, sx, ariaLabel }: ContactButtonProps) {
  return (
    <IconButton
      size="large"
      href={href}
      color="inherit"
      sx={sx}
      aria-label={ariaLabel}
    >
      {children}
    </IconButton>
  );
}
