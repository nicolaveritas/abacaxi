import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Title,
  Section,
  SectionHeader,
  SectionBody,
} from "../../components/elements";
import { fetchUserInfo, selectUserInfo } from "./redux";

function SettingsPage() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state: RootState) =>
    selectUserInfo(state.settings)
  );
  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);
  return (
    <Section>
      <SectionHeader>
        <Title>Hello Settings!</Title>
      </SectionHeader>
      <SectionBody>
        <code>
          <pre>{JSON.stringify(userInfo, null, 2)}</pre>
        </code>
      </SectionBody>
    </Section>
  );
}

export default SettingsPage;
