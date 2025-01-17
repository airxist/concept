import React from "react";
import Section from "../sharedLayouts/Section";
import {
  copyright,
  corporate_office,
  footerCompanies,
  phoneStores,
  presence,
  registered_office,
  socialLinks,
  usefulLinks,
} from "../constants";

const Footer = () => {
  return (
    <Section className="bg-footer-gradient text-white pt-10">
      <div className="normal-pad">
        <div>
          <h4 className="footer-h">Our Presence</h4>
          <p className="footer-p">{presence}</p>
        </div>

        <div className="md:flex items-stretch mt-8">
          <div className="md:w-8/12">
            <div className="md:flex">
              <div className="md:w-1/2">
                <h4 className="footer-h">Useful Links</h4>
                <div className="grid grid-cols-2 gap-y-2">
                  {usefulLinks.map((link, index) => {
                    return (
                      <div key={index}>
                        <p key={index} className="footer-p">
                          {link.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="md:w-1/2 md:px-[3.5rem] mt-10 md:mt-0">
                <div>
                  <h4 className="footer-h">Corporate Office:</h4>
                  <p className="footer-p">{corporate_office}</p>
                </div>
                <div className="mt-6">
                  <h4 className="footer-h">Registered Office:</h4>
                  <p className="footer-p">{registered_office}</p>
                </div>
              </div>
            </div>
            <p className="footer-p mt-12 text-center md:text-left">
              {copyright}
            </p>
          </div>

          <div className="md:w-4/12">
            <div className="flex-center mt-11 space-x-11 md:space-x-1">
              {socialLinks.map((social, index) => {
                return (
                  <div key={social.id} className="size-[1.9rem]">
                    <img src={social.icon} alt="social link" />
                  </div>
                );
              })}
            </div>
            <div className="mt-4">
              <h4 className="font-bold text-[0.74rem] text-center mb-1 font-ob">
                Download <br />
                MyBranch SpaceOnDemand App
              </h4>
              <div className="flex-center space-x-2">
                <div>
                  <img
                    src={phoneStores.googlePlayStore}
                    alt="google play store"
                  />
                </div>
                <div>
                  <img src={phoneStores.appleStore} alt="google play store" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="w-[16.5rem] h-40 m-auto">
                <img
                  src={phoneStores.phones}
                  alt="phones"
                  className="m-auto w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white hidden md:block normal-pad">
        <div className="flex items-center h-16 space-x-11">
          <div className="w-2/12 h-[4.17rem] border-red-400">
            <img src={footerCompanies.narayan} alt="narayan" className="img" />
          </div>
          <div className="flex items-center space-x-11 border w-10/12 justify-end">
            <div className="footer-company">
              <img src={footerCompanies.NSB} alt="narayan" className="img" />
            </div>
            <div className="footer-company">
              <img src={footerCompanies.CB} alt="narayan" className="img" />
            </div>
            <div className="footer-company">
              <img
                src={footerCompanies.Gromaxx}
                alt="narayan"
                className="img"
              />
            </div>
            <div className="footer-company">
              <img src={footerCompanies.NBF} alt="narayan" className="img" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
