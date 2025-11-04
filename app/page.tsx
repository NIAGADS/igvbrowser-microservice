"use client";

import { FEATURE_SEARCH_ENDPOINT, GENOME, VariantReferenceTrack } from "@/config/reference.track.config";

import IGVBrowserTrack from "@/components/IGVBrowser/tracks/IGVBrowserTrack";
import dynamic from "next/dynamic";

const GenomeBrowser = dynamic(() => import("@/components/IGVBrowser/IGVBrowser").then((mod) => mod.MemoIGVBrowser), {
    ssr: false,
});

const TRACKS: IGVBrowserTrack[] = [
    VariantReferenceTrack,
    {
        id: "NGFGXQTL0002",
        name: "Knight-ADRC-mQTL-PC",
        url: "https://tf.lisanwanglab.org/GADB/FILER2/Annotationtracks/ADSP_FunGen_xQTL/v1/Knight-ADRC/mQTL/qvalue_significant/bed3plus17_qtl/hg38/FunGenADv1.Knight-ADRC.mQTL.PC.NGFGXQTL0002_v1_$CHR_snp_qsig.SNP_qvalue_significant.20250901.bed.gz",
        description: "",
        infoURL: "/record",
        format: "bed3+17",
        type: "qtl",
        indexURL:
            "https://tf.lisanwanglab.org/GADB/FILER2/Annotationtracks/ADSP_FunGen_xQTL/v1/Knight-ADRC/mQTL/qvalue_significant/bed3plus17_qtl/hg38/FunGenADv1.Knight-ADRC.mQTL.PC.NGFGXQTL0002_v1_$CHR_snp_qsig.SNP_qvalue_significant.20250901.bed.gz.tbi",
        autoscale: true,
    },
];

export default function Page() {
    // const collections: Collection[] = parseCollectionList(process.env.NEXT_PUBLIC_TRACK_COLLECTIONS!);
    // const selector = await fetchTrackSelector(collections);
    //const config = await fetchTrackConfiguration(collections);
    // const metadata = await fetchCollectionMetadata(collections);

    return (
        <>
            <GenomeBrowser genome={GENOME} featureSearchURI={FEATURE_SEARCH_ENDPOINT} tracks={TRACKS}></GenomeBrowser>
        </>
    );
}
