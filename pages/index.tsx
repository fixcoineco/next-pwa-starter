import { Layout } from "@/app/components/Layout";
import { Home } from "@/features/home";
import { SEOMetaTags } from "@/app/components/SEOMetaTags";
import { Status } from "@/bff/types/status";
import { BackendForFrontendService } from "@/bff/BackendForFrontendService";
import { GetServerSideProps, NextPage } from "next";
import useSWR from "swr";
import SWRConfig from "swr/dist/utils/config-context";

interface Props {
  url: string;
}

const HomePage: NextPage<Props> = ({ url }) => {
  const { data } = useSWR(url);

  return (
    <Layout>
      {data && (
        <SEOMetaTags
          title={data.name + " • FixcoinApp"}
          description={data.description || null}
          // imgUrl={Config.Ipfs.Gateway + unwrapMediaString(data.avatarHash).cid}
          keywords={`Fixcoin, Payback, Fidelity, Tokens, Blockchain`}
        />
      )}
      <Home status={data} />
    </Layout>
  );
};

export default function Page({ fallback }: { fallback: any }) {
  return (
    <SWRConfig value={{ fallback }}>
      <HomePage url={fallback.fetchingUrl} />
    </SWRConfig>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx;
  const queryURL = `profiles/${query.profileId}`;
  const service = new BackendForFrontendService(ctx.req);
  const data = await service.get<Status>(queryURL);

  return {
    notFound: !data,
    props: {
      fallback: {
        [queryURL]: data,
        fetchingUrl: queryURL,
      },
    },
  };
};
