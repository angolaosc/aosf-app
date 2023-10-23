"use client";
import { CONTRIBUTORS } from "@/utilities/data";
import { Contributor } from "../contributor";
import { Wrapper } from "./style";

export default function CopyrightFooter() {
  return (
    <Wrapper>
      <div className="main__container">
        <p>Shoutout para os Devs voluntários</p>
        <div className="contributors">
          {CONTRIBUTORS.map(
            ({ id, name, Avatar, role, href, linkYoutube }) => (
              <Contributor
                key={id}
                name={name}
                src={Avatar}
                role={role}
                href={href}
                linkYoutube={linkYoutube}
              />
            )
          )}
        </div>

        <div className="aosc">
          <p>© 2023 Angola Open-Source Community.</p>
          <p>
            Todos os direitos reservados. Licenciado sob
            <a href="https://github.com/angolaosc/aosf-website/blob/main/LICENSE">
              {" "}
              Licença Apache-2.0.{" "}
            </a>
            <a href="https://github.com/angolaosc/aosf-website">Código fonte</a>
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
