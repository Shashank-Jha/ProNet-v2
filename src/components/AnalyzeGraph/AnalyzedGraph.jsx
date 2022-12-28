import React,{useEffect, useState} from "react";
import ForceGraph3D from "react-force-graph-3d";
import Header from "../Header";
import Footer from "../Footer";
import Table from "../Table";
let tableContent = [];
function AnalyzedGraph() {

  const initialData = {
    nodes: [ { id: "id1", name: "Dummy data 1", val: 10, }, { id: "id2", name: "Dummy data 2", val: 9, }, ],
    links: [ { source: "id1", target: "id2"  },],
  };

  const [visGraphData, setVisGraphData] = useState(initialData);
  
  useEffect(() => {
  const ppiInfoDataString = `9606.ENSP00000000233	ARF5	180	ADP-ribosylation factor 5; GTP-binding protein that functions as an allosteric activator of the cholera toxin catalytic subunit, an ADP- ribosyltransferase. Involved in protein trafficking; may modulate vesicle budding and uncoating within the Golgi apparatus; ARF GTPase family
9606.ENSP00000000412	M6PR	277	Cation-dependent mannose-6-phosphate receptor; Transport of phosphorylated lysosomal enzymes from the Golgi complex and the cell surface to lysosomes. Lysosomal enzymes bearing phosphomannosyl residues bind specifically to mannose-6- phosphate receptors in the Golgi apparatus and the resulting receptor-ligand complex is transported to an acidic prelyosomal compartment where the low pH mediates the dissociation of the complex; MRH domain containing 
9606.ENSP00000001008	FKBP4	459	Peptidyl-prolyl cis-trans isomerase FKBP4; Immunophilin protein with PPIase and co-chaperone activities. Component of steroid receptors heterocomplexes through interaction with heat-shock protein 90 (HSP90). May play a role in the intracellular trafficking of heterooligomeric forms of steroid hormone receptors between cytoplasm and nuclear compartments. The isomerase activity controls neuronal growth cones via regulation of TRPC1 channel opening. Acts also as a regulator of microtubule dynamics by inhibiting MAPT/TAU ability to promote microtubule assembly. May have a protective role a [...] 
9606.ENSP00000001146	CYP26B1	512	Cytochrome P450 26B1; Involved in the metabolism of retinoic acid (RA), rendering this classical morphogen inactive through oxidation. Involved in the specific inactivation of all-trans-retinoic acid (all-trans-RA), with a preference for the following substrates: all-trans-RA > 9-cis-RA > 13-cis-RA. Generates several hydroxylated forms of RA, including 4-OH-RA, 4-oxo-RA, and 18-OH- RA. Essential for postnatal survival. Plays a central role in germ cell development: acts by degrading RA in the developing testis, preventing STRA8 expression, thereby leading to delay of meiosis. Required  [...] 
9606.ENSP00000002125	NDUFAF7	441	Protein arginine methyltransferase NDUFAF7, mitochondrial; Arginine methyltransferase involved in the assembly or stability of mitochondrial NADH:ubiquinone oxidoreductase complex (complex I). Acts by mediating symmetric dimethylation of 'Arg-118' of NDUFS2 after it assembles into the complex I, stabilizing the early intermediate complex; Belongs to the NDUFAF7 family
9606.ENSP00000002165	FUCA2	467	Plasma alpha-L-fucosidase; Alpha-L-fucosidase is responsible for hydrolyzing the alpha-1,6-linked fucose joined to the reducing-end N- acetylglucosamine of the carbohydrate moieties of glycoproteins; Belongs to the glycosyl hydrolase 29 family
9606.ENSP00000002596	HS3ST1	307	Heparan sulfate glucosamine 3-O-sulfotransferase 1; Sulfotransferase that utilizes 3'-phospho-5'-adenylyl sulfate (PAPS) to catalyze the transfer of a sulfo group to position 3 of glucosamine residues in heparan. Catalyzes the rate limiting step in the biosynthesis of heparan sulfate (HSact). This modification is a crucial step in the biosynthesis of anticoagulant heparan sulfate as it completes the structure of the antithrombin pentasaccharide binding site
9606.ENSP00000002829	SEMA3F	785	Semaphorin-3F; May play a role in cell motility and cell adhesion; Immunoglobulin like domain containing
9606.ENSP00000003084	CFTR	1480	Cystic fibrosis transmembrane conductance regulator; Epithelial ion channel that plays an important role in the regulation of epithelial ion and water transport and fluid homeostasis. Mediates the transport of chloride ions across the cell membrane. Channel activity is coupled to ATP hydrolysis. The ion channel is also permeable to HCO(3-); selectivity depends on the extracellular chloride concentration. Exerts its function also by modulating the activity of other ion channels and transporters. Plays an important role in airway fluid homeostasis. Contributes to the regulation of the pH [...] 
9606.ENSP00000003100	CYP51A1	509	Lanosterol 14-alpha demethylase; Catalyzes C14-demethylation of lanosterol; it transforms lanosterol into 4,4'-dimethyl cholesta-8,14,24-triene-3-beta-ol; Cytochrome P450 family 51
9606.ENSP00000003302	USP28	1077	Ubiquitin carboxyl-terminal hydrolase 28; Deubiquitinase involved in DNA damage response checkpoint and MYC proto-oncogene stability. Involved in DNA damage induced apoptosis by specifically deubiquitinating proteins of the DNA damage pathway such as CLSPN. Also involved in G2 DNA damage checkpoint, by deubiquitinating CLSPN, and preventing its degradation by the anaphase promoting complex/cyclosome (APC/C). In contrast, it does not deubiquitinate PLK1. Specifically deubiquitinates MYC in the nucleoplasm, leading to prevent MYC degradation by the proteasome: acts by specifically intera [...] 
9606.ENSP00000004531	SLC7A2	698	Cationic amino acid transporter 2; Functions as permease involved in the transport of the cationic amino acids (arginine, lysine and ornithine); the affinity for its substrates differs between isoforms created by alternative splicing. Isoform 1 functions as permease that mediates the transport of the cationic amino acids (arginine, lysine and ornithine), and it has much higher affinity for arginine than isoform 2. Isoform 2 functions as low-affinity, high capacity permease involved in the transport of the cationic amino acids (arginine, lysine and ornithine). May play a role in classic [...] 
9606.ENSP00000005178	PDK4	411	[Pyruvate dehydrogenase (acetyl-transferring)] kinase isozyme 4, mitochondrial; Kinase that plays a key role in regulation of glucose and fatty acid metabolism and homeostasis via phosphorylation of the pyruvate dehydrogenase subunits PDHA1 and PDHA2. This inhibits pyruvate dehydrogenase activity, and thereby regulates metabolite flux through the tricarboxylic acid cycle, down-regulates aerobic respiration and inhibits the formation of acetyl-coenzyme A from pyruvate. Inhibition of pyruvate dehydrogenase decreases glucose utilization and increases fat metabolism in response to prolonge [...] 
9606.ENSP00000005226	USH1C	899	Harmonin; Anchoring/scaffolding protein that is a part of the functional network formed by USH1C, USH1G, CDH23 and MYO7A that mediates mechanotransduction in cochlear hair cells. Required for normal development and maintenance of cochlear hair cell bundles (By similarity). As part of the intermicrovillar adhesion complex/IMAC plays a role in brush border differentiation, controlling microvilli organization and length. Probably plays a central regulatory role in the assembly of the complex, recruiting CDHR2, CDHR5 and MYO7B to the microvilli tips; Deafness associated genes
9606.ENSP00000005257	RALA	206	Ras-related protein Ral-A; Multifunctional GTPase involved in a variety of cellular processes including gene expression, cell migration, cell proliferation, oncogenic transformation and membrane trafficking. Accomplishes its multiple functions by interacting with distinct downstream effectors. Acts as a GTP sensor for GTP-dependent exocytosis of dense core vesicles. The RALA-exocyst complex regulates integrin-dependent membrane raft exocytosis and growth signaling. Key regulator of LPAR1 signaling and competes with GRK2 for binding to LPAR1 thus affecting the signaling properties of th [...] 
9606.ENSP00000005260	BAIAP2L1	511	Brain-specific angiogenesis inhibitor 1-associated protein 2-like protein 1; May function as adapter protein. Involved in the formation of clusters of actin bundles. Plays a role in the reorganization of the actin cytoskeleton in response to bacterial infection; I-BAR domain containing
9606.ENSP00000005284	CACNG3	315	Voltage-dependent calcium channel gamma-3 subunit; Regulates the trafficking to the somatodendritic compartment and gating properties of AMPA-selective glutamate receptors (AMPARs). Promotes their targeting to the cell membrane and synapses and modulates their gating properties by slowing their rates of activation, deactivation and desensitization. Does not show subunit-specific AMPA receptor regulation and regulates all AMPAR subunits. Thought to stabilize the calcium channel in an inactivated (closed) state
9606.ENSP00000005286	TMEM132A	1024	Transmembrane protein 132A; May play a role in embryonic and postnatal development of the brain. Increased resistance to cell death induced by serum starvation in cultured cells. Regulates cAMP-induced GFAP gene expression via STAT3 phosphorylation (By similarity); Belongs to the TMEM132 family
9606.ENSP00000005340	DVL2	736	Segment polarity protein dishevelled homolog DVL-2; Plays a role in the signal transduction pathways mediated by multiple Wnt genes. Participates both in canonical and non-canonical Wnt signaling by binding to the cytoplasmic C- terminus of frizzled family members and transducing the Wnt signal to down-stream effectors. Promotes internalization and degradation of frizzled proteins upon Wnt signaling; Belongs to the DSH family
9606.ENSP00000005386	RPAP3	665	RNA polymerase II-associated protein 3; Forms an interface between the RNA polymerase II enzyme and chaperone/scaffolding protein, suggesting that it is required to connect RNA polymerase II to regulators of protein complex formation; Belongs to the RPAP3 family
9606.ENSP00000005587	SKAP2	359	Src kinase-associated phosphoprotein 2; May be involved in B-cell and macrophage adhesion processes. In B-cells, may act by coupling the B-cell receptor (BCR) to integrin activation. May play a role in src signaling pathway; Belongs to the SKAP family
9606.ENSP00000005995	PRSS21	314	Testisin; Could regulate proteolytic events associated with testicular germ cell maturation; Serine proteases
9606.ENSP00000006015	HOXA11	313	Homeobox protein Hox-A11; Sequence-specific transcription factor which is part of a developmental regulatory system that provides cells with specific positional identities on the anterior-posterior axis; HOXL subclass homeoboxes
9606.ENSP00000006053	CX3CL1	397	Fractalkine; Acts as a ligand for both CX3CR1 and integrins. Binds to CX3CR1. Binds to integrins ITGAV:ITGB3 and ITGA4:ITGB1. Can activate integrins in both a CX3CR1-dependent and CX3CR1-independent manner. In the presence of CX3CR1, activates integrins by binding to the classical ligand-binding site (site 1) in integrins. In the absence of CX3CR1, binds to a second site (site 2) in integrins which is distinct from site 1 and enhances the binding of other integrin ligands to site 1. The soluble form is chemotactic for T-cells and monocytes and not for neutrophils. The membrane-bound fo [...] 
9606.ENSP00000006275	TRAPPC6A	173	Trafficking protein particle complex subunit 6A; May play a role in vesicular transport during the biogenesis of melanosomes; Trafficking protein particle complex
9606.ENSP00000006526	WDR54	334	WD repeat-containing protein 54; WD repeat domain containing
9606.ENSP00000006658	SPATA20	802	Spermatogenesis-associated protein 20; May play a role in fertility regulation
9606.ENSP00000006724	CEACAM7	265	Carcinoembryonic antigen related cell adhesion molecule family; Belongs to the immunoglobulin superfamily. CEA family
9606.ENSP00000006777	RHBDD2	364	Rhomboid domain containing 2; Belongs to the peptidase S54 family
9606.ENSP00000007390	TSR3	312	Ribosome biogenesis protein TSR3 homolog; Probable pre-rRNA processing protein involved in ribosome biogenesis
9606.ENSP00000007414	OSBPL7	842	Oxysterol-binding protein-related protein 7; Pleckstrin homology domain containing; Belongs to the OSBP family
9606.ENSP00000007699	YBX2	364	Y-box-binding protein 2; Major constituent of messenger ribonucleoprotein particles (mRNPs). Involved in the regulation of the stability and/or translation of germ cell mRNAs. Binds to Y-box consensus promoter element. Binds to full-length mRNA with high affinity in a sequence-independent manner. Binds to short RNA sequences containing the consensus site 5'-UCCAUCA-3' with low affinity and limited sequence specificity. Its binding with maternal mRNAs is necessary for its cytoplasmic retention. May mark specific mRNAs (those transcribed from Y-box promoters) in the nucleus for cytoplasm [...] 
9606.ENSP00000007722	ITGA3	1066	Integrin alpha-3; Integrin alpha-3/beta-1 is a receptor for fibronectin, laminin, collagen, epiligrin, thrombospondin and CSPG4. Integrin alpha-3/beta-1 provides a docking site for FAP (seprase) at invadopodia plasma membranes in a collagen-dependent manner and hence may participate in the adhesion, formation of invadopodia and matrix degradation processes, promoting cell invasion. Alpha- 3/beta-1 may mediate with LGALS3 the stimulation by CSPG4 of endothelial cells migration; CD molecules
9606.ENSP00000007735	KRT33A	404	Keratin, type I cuticular Ha3-I; Keratins, type I; Belongs to the intermediate filament family
9606.ENSP00000008391	TFAP2D	452	Transcription factor AP-2-delta; Sequence-specific DNA-binding protein that interacts with inducible viral and cellular enhancer elements to regulate transcription of selected genes. AP-2 factors bind to the consensus sequence 5'-GCCNNNGGC-3' and activate genes involved in a large spectrum of important biological functions including proper eye, face, body wall, limb and neural tube development. They also suppress a number of genes including MCAM/MUC18, C/EBP alpha and MYC (By similarity)
9606.ENSP00000008527	CRY1	586	Cryptochrome-1; Transcriptional repressor which forms a core component of the circadian clock. The circadian clock, an internal time- keeping system, regulates various physiological processes through the generation of approximately 24 hour circadian rhythms in gene expression, which are translated into rhythms in metabolism and behavior. It is derived from the Latin roots 'circa' (about) and 'diem' (day) and acts as an important regulator of a wide array of physiological functions including metabolism, sleep, body temperature, blood pressure, endocrine, immune, cardiovascular, and rena [...] 
9606.ENSP00000008938	PGLYRP1	196	Peptidoglycan recognition protein 1; Pattern receptor that binds to murein peptidoglycans (PGN) of Gram-positive bacteria. Has bactericidal activity towards Gram-positive bacteria. May kill Gram-positive bacteria by interfering with peptidoglycan biosynthesis. Binds also to Gram- negative bacteria, and has bacteriostatic activity towards Gram- negative bacteria. Plays a role in innate immunity; Peptidoglycan recognition proteins
9606.ENSP00000009041	STARD3NL	234	STARD3 N-terminal-like protein; Tethering protein that creates contact site between the endoplasmic reticulum and late endosomes: localizes to late endosome membranes and contacts the endoplasmic reticulum via interaction with VAPA and VAPB; Belongs to the STARD3 family
9606.ENSP00000009105	CAMK1G	476	Calcium/calmodulin-dependent protein kinase type 1G; Calcium/calmodulin-dependent protein kinase belonging to a proposed calcium-triggered signaling cascade. In vitro phosphorylates transcription factor CREB1 (By similarity); Belongs to the protein kinase superfamily. CAMK Ser/Thr protein kinase family. CaMK subfamily
9606.ENSP00000009530	CD74	296	HLA class II histocompatibility antigen gamma chain; Plays a critical role in MHC class II antigen processing by stabilizing peptide-free class II alpha/beta heterodimers in a complex soon after their synthesis and directing transport of the complex from the endoplasmic reticulum to the endosomal/lysosomal system where the antigen processing and binding of antigenic peptides to MHC class II takes place. Serves as cell surface receptor for the cytokine MIF; CD molecules
9606.ENSP00000010299	FAM76A	341	X-linked retinitis pigmentosa GTPase regulator-interacting protein 1; Family with sequence similarity 76 member A
9606.ENSP00000011292	CPA1	419	Carboxypeptidase A1; Carboxypeptidase that catalyzes the release of a C- terminal amino acid, but has little or no action with -Asp, -Glu, -Arg, -Lys or -Pro; Belongs to the peptidase M14 family
9606.ENSP00000011473	SYPL1	259	Synaptophysin-like protein 1; Synaptophysin like 1; Belongs to the synaptophysin/synaptobrevin family
9606.ENSP00000011619	RANBP9	729	Ran-binding protein 9; May act as an adapter protein to couple membrane receptors to intracellular signaling pathways. May be involved in signaling of ITGB2/LFA-1 and other integrins. Enhances HGF-MET signaling by recruiting Sos and activating the Ras pathway. Enhances dihydrotestosterone-induced transactivation activity of AR, as well as dexamethasone-induced transactivation activity of NR3C1, but not affect estrogen-induced transactivation. Stabilizes TP73 isoform Alpha, probably by inhibiting its ubiquitination, and increases its proapoptotic activity. Inhibits the kinase activity o [...] 
9606.ENSP00000011653	CD4	458	T-cell surface glycoprotein CD4; Integral membrane glycoprotein that plays an essential role in the immune response and serves multiple functions in responses against both external and internal offenses. In T-cells, functions primarily as a coreceptor for MHC class II molecule:peptide complex. The antigens presented by class II peptides are derived from extracellular proteins while class I peptides are derived from cytosolic proteins. Interacts simultaneously with the T-cell receptor (TCR) and the MHC class II presented by antigen presenting cells (APCs). In turn, recruits the Src kina [...] 
9606.ENSP00000011898	TSPAN9	239	Tetraspanin-9; Tetraspanin 9; Belongs to the tetraspanin (TM4SF) family
9606.ENSP00000012049	QPCTL	382	Glutaminyl-peptide cyclotransferase-like protein; Responsible for the biosynthesis of pyroglutamyl peptides
9606.ENSP00000012443	PPP5C	499	Serine/threonine-protein phosphatase 5; Serine/threonine-protein phosphatase that dephosphorylates a myriad of proteins involved in different signaling pathways including the kinases CSNK1E, ASK1/MAP3K5, PRKDC and RAF1, the nuclear receptors NR3C1, PPARG, ESR1 and ESR2, SMAD proteins and TAU/MAPT. Implicated in wide ranging cellular processes, including apoptosis, differentiation, DNA damage response, cell survival, regulation of ion channels or circadian rhythms, in response to steroid and thyroid hormones, calcium, fatty acids, TGF-beta as well as oxidative and genotoxic stresses. Pa [...] 
9606.ENSP00000013070	UBR7	425	Putative E3 ubiquitin-protein ligase UBR7; E3 ubiquitin-protein ligase which is a component of the N-end rule pathway. Recognizes and binds to proteins bearing specific N-terminal residues that are destabilizing according to the N-end rule, leading to their ubiquitination and subsequent degradation
9606.ENSP00000013125	MAP4K5	846	Mitogen-activated protein kinase kinase kinase kinase 5; May play a role in the response to environmental stress. Appears to act upstream of the JUN N-terminal pathway; Mitogen-activated protein kinase kinase kinase kinases
9606.ENSP00000013222	INMT	263	Indolethylamine N-methyltransferase; Functions as thioether S-methyltransferase and is active with a variety of thioethers and the corresponding selenium and tellurium compounds, including 3-methylthiopropionaldehyde, dimethyl selenide, dimethyl telluride, 2-methylthioethylamine, 2- methylthioethanol, methyl-n-propyl sulfide and diethyl sulfide. Plays an important role in the detoxification of selenium compounds (By similarity). Catalyzes the N-methylation of tryptamine and structurally related compounds; Seven-beta-strand methyltransferase motif containing
9606.ENSP00000013807	ERCC1	323	DNA excision repair protein ERCC-1; Isoform 1: Non-catalytic component of a structure- specific DNA repair endonuclease responsible for the 5'-incision during DNA repair. Responsible, in conjunction with SLX4, for the first step in the repair of interstrand cross-links (ICL). Participates in the processing of anaphase bridge-generating DNA structures, which consist in incompletely processed DNA lesions arising during S or G2 phase, and can result in cytokinesis failure. Also required for homology-directed repair (HDR) of DNA double-strand breaks, in conjunction with SLX4; ERCC excision [...] 
9606.ENSP00000014914	GPRC5A	357	Retinoic acid-induced protein 3; Orphan receptor. Could be involved in modulating differentiation and maintaining homeostasis of epithelial cells. This retinoic acid-inducible GPCR provide evidence for a possible interaction between retinoid and G-protein signaling pathways. Functions as a negative modulator of EGFR signaling (By similarity). May act as a lung tumor suppressor
9606.ENSP00000014930	HEBP1	189	Heme-binding protein 1; May bind free porphyrinogens that may be present in the cell and thus facilitate removal of these potentially toxic compound. Binds with a high affinity to one molecule of heme or porphyrins. It binds metalloporphyrins, free porphyrins and N- methylprotoporphyrin with similar affinities; Belongs to the HEBP family
9606.ENSP00000016171	COX15	410	Cytochrome c oxidase assembly protein COX15 homolog; May be involved in the biosynthesis of heme A; Mitochondrial respiratory chain complex assembly factors
9606.ENSP00000016913	MS4A12	267	Membrane-spanning 4-domains subfamily A member 12; May be involved in signal transduction as a component of a multimeric receptor complex; Belongs to the MS4A family
9606.ENSP00000016946	RGPD5	1765	RANBP2-like and GRIP domain containing 5; Tetratricopeptide repeat domain containing
9606.ENSP00000017003	XYLT2	865	Xylosyltransferase 2; Involved in the formation of heparan sulfate and chondroitin sulfate proteoglycans. Probably catalyzes the first step in biosynthesis of glycosaminoglycan. Transfers D-xylose from UDP-D-xylose to specific serine residues of the core protein. Initial enzyme in the biosynthesis of chondroitin sulfate and dermatan sulfate proteoglycans in fibroblasts and chondrocytes (By similarity). Its enzyme activity has not been demonstrated; Belongs to the glycosyltransferase 14 family. XylT subfamily
9606.ENSP00000019103	SCTR	440	Secretin receptor; This is a receptor for secretin. The activity of this receptor is mediated by G proteins which activate adenylyl cyclase; Glucagon receptor family
9606.ENSP00000019317	RALBP1	655	RalA-binding protein 1; Can activate specifically hydrolysis of GTP bound to RAC1 and CDC42, but not RALA. Mediates ATP-dependent transport of S-(2,4-dinitrophenyl)-glutathione (DNP-SG) and doxorubicin (DOX) and is the major ATP-dependent transporter of glutathione conjugates of electrophiles (GS-E) and DOX in erythrocytes. Can catalyze transport of glutathione conjugates and xenobiotics, and may contribute to the multidrug resistance phenomenon. Serves as a scaffold protein that brings together proteins forming an endocytotic complex during interphase and also with CDK1 to switch off  [...] 
9606.ENSP00000020673	PSD	1024	PH and SEC7 domain-containing protein 1; Guanine nucleotide exchange factor for ARF6. Induces cytoskeletal remodeling (By similarity); Belongs to the PSD family
9606.ENSP00000020926	SYT13	426	Synaptotagmin-13; May be involved in transport vesicle docking to the plasma membrane; Belongs to the synaptotagmin family
9606.ENSP00000023064	SLC7A9	487	B(0,+)-type amino acid transporter 1; Involved in the high-affinity, sodium-independent transport of cystine and neutral and dibasic amino acids (system b(0,+)-like activity). Thought to be responsible for the high- affinity reabsorption of cystine in the kidney tubule; Belongs to the amino acid-polyamine-organocation (APC) superfamily
9606.ENSP00000023939	RTFDC1	336	Protein RTF2 homolog; Replication termination factor 2 domain containing 1; Belongs to the rtf2 family
9606.ENSP00000025008	RB1CC1	1594	RB1-inducible coiled-coil protein 1; Involved in autophagy. Regulates early events but also late events of autophagosome formation through direct interaction with Atg16L1. Required for the formation of the autophagosome-like double-membrane structure that surrounds the Salmonella-containing vacuole (SCV) during S.typhimurium infection and subsequent xenophagy (By similarity). Involved in repair of DNA damage caused by ionizing radiation, which subsequently improves cell survival by decreasing apoptosis (By similarity). Inhibits PTK2/FAK1 and PTK2B/PYK2 kinase activity, affecting their  [...] 
9606.ENSP00000025301	AKAP11	1901	A-kinase anchor protein 11; Binds to type II regulatory subunits of protein kinase A and anchors/targets them; Belongs to the AKAP110 family
9606.ENSP00000026218	PIGQ	760	Phosphatidylinositol N-acetylglucosaminyltransferase subunit Q; Part of the complex catalyzing the transfer of N- acetylglucosamine from UDP-N-acetylglucosamine to phosphatidylinositol, the first step of GPI biosynthesis; Belongs to the PIGQ family
9606.ENSP00000027335	CDH17	832	Cadherin-17; Cadherins are calcium-dependent cell adhesion proteins. They preferentially interact with themselves in a homophilic manner in connecting cells; cadherins may thus contribute to the sorting of heterogeneous cell types. LI-cadherin may have a role in the morphological organization of liver and intestine. Involved in intestinal peptide transport
9606.ENSP00000029410	B4GALT7	327	Beta-1,4-galactosyltransferase 7; Required for the biosynthesis of the tetrasaccharide linkage region of proteoglycans, especially for small proteoglycans in skin fibroblasts; Belongs to the glycosyltransferase 7 family
9606.ENSP00000033079	FAM13B	915	Protein FAM13B; Family with sequence similarity 13 member B; Rho GTPase activating proteins
9606.ENSP00000035307	CHPF2	772	Chondroitin sulfate glucuronyltransferase; Transfers glucuronic acid (GlcUA) from UDP-GlcUA to N- acetylgalactosamine residues on the non-reducing end of the elongating chondroitin polymer. Has no N- acetylgalactosaminyltransferase activity; Beta 3-glycosyltransferases
9606.ENSP00000035383	LRRC7	1537	Leucine-rich repeat-containing protein 7; Required for normal synaptic spine architecture and function. Necessary for DISC1 and GRM5 localization to postsynaptic density complexes and for both N-methyl D-aspartate receptor-dependent and metabotropic glutamate receptor-dependent long term depression; Belongs to the LAP (LRR and PDZ) protein family
9606.ENSP00000037243	GABARAPL2	117	Gamma-aminobutyric acid receptor-associated protein-like 2; Ubiquitin-like modifier involved in intra-Golgi traffic. Modulates intra-Golgi transport through coupling between NSF activity and SNAREs activation. It first stimulates the ATPase activity of NSF which in turn stimulates the association with GOSR1 (By similarity). Involved in autophagy. Plays a role in mitophagy which contributes to regulate mitochondrial quantity and quality by eliminating the mitochondria to a basal level to fulfill cellular energy requirements and preventing excess ROS production. Whereas LC3s are involved [...] 
9606.ENSP00000037502	MYOC	504	Myocilin; Secreted glycoprotein regulating the activation of different signaling pathways in adjacent cells to control different processes including cell adhesion, cell-matrix adhesion, cytoskeleton organization and cell migration. Promotes substrate adhesion, spreading and formation of focal contacts. Negatively regulates cell-matrix adhesion and stress fiber assembly through Rho protein signal transduction. Modulates the organization of actin cytoskeleton by stimulating the formation of stress fibers through interactions with components of Wnt signaling pathways. Promotes cell migrat [...] 
9606.ENSP00000037869	FAM136A	138	Protein FAM136A; Family with sequence similarity 136 member A; Belongs to the FAM136 family
9606.ENSP00000039007	OTC	354	Ornithine carbamoyltransferase, mitochondrial; Ornithine carbamoyltransferase; Belongs to the ATCase/OTCase family
9606.ENSP00000039989	TTC17	1141	Tetratricopeptide repeat protein 17; Plays a role in primary ciliogenesis by modulating actin polymerization; Tetratricopeptide repeat domain containing
9606.ENSP00000040584	HOXC8	242	Homeobox protein Hox-C8; Sequence-specific transcription factor which is part of a developmental regulatory system that provides cells with specific positional identities on the anterior-posterior axis; Belongs to the Antp homeobox family
9606.ENSP00000040663	MRI1	369	Methylthioribose-1-phosphate isomerase; Catalyzes the interconversion of methylthioribose-1- phosphate (MTR-1-P) into methylthioribulose-1-phosphate (MTRu-1- P). Independently from catalytic activity, promotes cell invasion in response to constitutive RhoA activation by promoting FAK tyrosine phosphorylation and stress fiber turnover
9606.ENSP00000040738	BOD1L1	3051	Biorientation of chromosomes in cell division protein 1-like 1; Component of the fork protection machinery required to protect stalled/damaged replication forks from uncontrolled DNA2- dependent resection. Acts by stabilizing RAD51 at stalled replication forks and protecting RAD51 nucleofilaments from the antirecombinogenic activities of FBXO18/FBH1 and BLM. Does not regulate spindle orientation
9606.ENSP00000040877	TARBP1	1621	Probable methyltransferase TARBP1; Probable S-adenosyl-L-methionine-dependent methyltransferase which methylates RNA molecules such as tRNAs. In case of infection by HIV-1, it binds to the loop region of TAR RNA, a region also bound by RNA polymerase II. Binding of TARBP1 and RNA polymerase II to HIV-1 TAR RNA is mutually exclusive, suggesting that TARBP1 may function alone or in conjunction with HIV-1 Tat to disengage RNA polymerase II from HIV-1 TAR RNA. May act by methylating HIV-1 TAR RNA; Armadillo-like helical domain containing
9606.ENSP00000043402	RTN4R	473	Reticulon-4 receptor; Receptor for RTN4, OMG and MAG. Functions as receptor for the sialylated gangliosides GT1b and GM1. Besides, functions as receptor for chondroitin sulfate proteoglycans (By similarity). Can also bind heparin (By similarity). Intracellular signaling cascades are triggered via the coreceptor NGFR. Signaling mediates activation of Rho and downstream reorganization of the actin cytoskeleton. Mediates axonal growth inhibition. Plays a role in regulating axon regeneration and neuronal plasticity in the adult central nervous system. Plays a role in postnatal brain develo [...] 
9606.ENSP00000044462	PSMA4	261	Proteasome subunit alpha type-4; Component of the 20S core proteasome complex involved in the proteolytic degradation of most intracellular proteins. This complex plays numerous essential roles within the cell by associating with different regulatory particles. Associated with two 19S regulatory particles, forms the 26S proteasome and thus participates in the ATP-dependent degradation of ubiquitinated proteins. The 26S proteasome plays a key role in the maintenance of protein homeostasis by removing misfolded or damaged proteins that could impair cellular functions, and by removing pro [...] 
9606.ENSP00000046087	ZPBP	351	Zona pellucida-binding protein 1; Plays a role in acrosome compaction and sperm morphogenesis. Is implicated in sperm-oocyte interaction during fertilization (By similarity); Immunoglobulin like domain containing
9606.ENSP00000046794	LCP2	533	Lymphocyte cytosolic protein 2; Involved in T-cell antigen receptor mediated signaling; SH2 domain containing
9606.ENSP00000052754	DCN	359	Decorin; May affect the rate of fibrils formation; Small leucine rich repeat proteoglycans
9606.ENSP00000053243	TNFRSF17	184	Tumor necrosis factor receptor superfamily member 17; Receptor for TNFSF13B/BLyS/BAFF and TNFSF13/APRIL. Promotes B-cell survival and plays a role in the regulation of humoral immunity. Activates NF-kappa-B and JNK; CD molecules
9606.ENSP00000053468	MRPS10	201	Mitochondrial ribosomal protein S10; Belongs to the universal ribosomal protein uS10 family
9606.ENSP00000053867	GRN	593	Granulins; Granulins have possible cytokine-like activity. They may play a role in inflammation, wound repair, and tissue remodeling
9606.ENSP00000054650	THAP3	239	THAP domain-containing protein 3; Component of a THAP1/THAP3-HCFC1-OGT complex that is required for the regulation of the transcriptional activity of RRM1; THAP domain containing
9606.ENSP00000054666	VAMP3	100	Vesicle-associated membrane protein 3; SNARE involved in vesicular transport from the late endosomes to the trans-Golgi network; Belongs to the synaptobrevin family
9606.ENSP00000054668	UTS2	139	Urotensin 2; Endogenous ligands
9606.ENSP00000054950	RCN1	331	Reticulocalbin-1; May regulate calcium-dependent activities in the endoplasmic reticulum lumen or post-ER compartment; EF-hand domain containing
9606.ENSP00000055077	RFC2	354	Replication factor C subunit 2; The elongation of primed DNA templates by DNA polymerase delta and epsilon requires the action of the accessory proteins proliferating cell nuclear antigen (PCNA) and activator 1. This subunit binds ATP (By similarity)
9606.ENSP00000055335	PPP1R3F	799	Protein phosphatase 1 regulatory subunit 3F; Glycogen-targeting subunit for protein phosphatase 1 (PP1)
9606.ENSP00000055682	KIAA2022	1516	Neurite extension and migration factor; Involved in neurite outgrowth by regulating cell-cell adhesion via the N-cadherin signaling pathway. May act by regulating expression of protein-coding genes, such as N-cadherins and integrin beta-1 (ITGB1)
9606.ENSP00000056217	ARHGEF5	1597	Rho guanine nucleotide exchange factor 5; Guanine nucleotide exchange factor which activates Rho GTPases. Strongly activates RHOA. Also strongly activates RHOB, weakly activates RHOC and RHOG and shows no effect on RHOD, RHOV, RHOQ or RAC1 (By similarity). Involved in regulation of cell shape and actin cytoskeletal organization. Plays a role in actin organization by generating a loss of actin stress fibers and the formation of membrane ruffles and filopodia. Required for SRC-induced podosome formation (By similarity). Involved in positive regulation of immature dendritic cell migration [...] 
9606.ENSP00000056233	NFE2L3	694	Nuclear factor erythroid 2-related factor 3; Activates erythroid-specific, globin gene expression; Basic leucine zipper proteins
9606.ENSP00000061240	TLL1	1013	Tolloid-like protein 1; Protease which processes procollagen C-propeptides, such as chordin, pro-biglycan and pro-lysyl oxidase. Required for the embryonic development. Predominant protease, which in the development, influences dorsal-ventral patterning and skeletogenesis; Astacins`;

const ppiSplitByLine = ppiInfoDataString.split("\n");
// console.log(ppiSplitByLine.length);

const ppiArraySplitByTab = [];
ppiSplitByLine.map((e) => {
  e.split("\t").map((ele) => {
    ppiArraySplitByTab.push(ele);
  });
});

console.log(ppiArraySplitByTab);

let proteinIdSDB = [];
let proteinName = [];
let proteinScore = [];
let proteinDetails = [];

for (let idx = 0; idx < ppiArraySplitByTab.length; idx++) {
  switch (idx % 4) {
    case 0:
      proteinIdSDB.push(ppiArraySplitByTab[idx]);
      break;
    case 1:
      proteinName.push(ppiArraySplitByTab[idx]);
      break;
    case 2:
      proteinScore.push(ppiArraySplitByTab[idx]);
      break;
    case 3:
      proteinDetails.push(ppiArraySplitByTab[idx]);
      break;
  }
}

// console.log(proteinDetails);



  // console.log("This is visNet links",visNetwork.links);

  var centrality = require("ngraph.centrality");
  var graph = require("ngraph.graph")();

  let topNodes = new Set();
  const n = parseInt(JSON.parse(localStorage.getItem("maxTopNode")));
  const pickHighest = (obj,n) => {
    // if(n > Object.keys(obj).length){
    //   alert("please enter value size");
    //   return false;
    // }
    const requiredObj = {};
      Object.keys(obj).sort((a, b) => obj[b] - obj[a]).forEach((key, ind) =>
      {
       if(ind < Object.keys(obj).length){
          requiredObj[key] = obj[key];
       }
    });

    return requiredObj;
 };

  function createMyGraphForAnalysis(linkObj) {
    // console.log("graph creation")
    // console.log("this is the link obj",linkObj);
    for(let idx=0;idx<linkObj.length;idx++){
        // console.log("add link format",linkObj[idx].source,linkObj[idx].target);
        graph.addLink(linkObj[idx].source , linkObj[idx].target);
    }
  }

  function getTopNodes(nodeSet,topPairs){
      Object.keys(topPairs).forEach((key,cent)=>{
        nodeSet.add(key);
      })
      console.log(topNodes);
  }

  

  // {Calulating Degree Centrality}
  function calculateDegreeCentrality(graph) {
    var degreeCentrality = centrality.degree(graph);
    console.log(pickHighest(degreeCentrality,n));
    tableContent.push(pickHighest(degreeCentrality,n));
    getTopNodes(topNodes,pickHighest(degreeCentrality,n));
  }

  function calculateBetweennessCentrality(graph) {
    var betweennessCentrality = centrality.betweenness(graph);
    console.log(pickHighest(betweennessCentrality,n));
    tableContent.push(pickHighest(betweennessCentrality,n));
    getTopNodes(topNodes,pickHighest(betweennessCentrality,n));
  }

  function calculateClosenessCentrality(graph) {
    var closenessCentrality = centrality.closeness(graph);
    console.log(pickHighest(closenessCentrality,n));
    tableContent.push(pickHighest(closenessCentrality,n));
    getTopNodes(topNodes,pickHighest(closenessCentrality,n));
  }

  function calculateEccentricityCentrality(graph) {
    var eccentricityCentrality = centrality.eccentricity(graph);
    console.log(pickHighest(eccentricityCentrality,n));
    tableContent.push(pickHighest(eccentricityCentrality,n));
    getTopNodes(topNodes,pickHighest(eccentricityCentrality,n));
  }

  let centralityAlgoSelected = JSON.parse(localStorage.getItem("selectedAlgo"));
  let graphData = JSON.parse(localStorage.getItem("dataKey"));

  // console.log("this is links",graphData.links);
  createMyGraphForAnalysis(graphData.links);

  // console.log("yeh local storage se checkbox uthaya hai ",centralityAlgoSelected);

  let centralityCount = [0, 0, 0, 0]; // [Degree, Betweenness, Closeness, Eccentricity]
  for (let idx = 0; idx < centralityAlgoSelected.length; idx++) {
    console.log(centralityAlgoSelected[idx]);
    switch (centralityAlgoSelected[idx]) {
      case "DC":
        centralityCount[0] += 1;
        break;

      case "BC":
        centralityCount[1] += 1;
        break;

      case "CC":
        centralityCount[2] += 1;
        break;

      case "EC":
        centralityCount[3] += 1;
        break;
    }
  }
  // console.log("local se uthake count kiya hai kitne baar checkbox daba",centralityCount);

  for (let idx = 0; idx < centralityCount.length; idx++) {
    centralityCount[idx] %= 2;
  }
  // console.log("agar checkbox odd times h to true else false",centralityCount);

  if (centralityCount[0] === 1) {
    calculateDegreeCentrality(graph);
  }
  if (centralityCount[1] === 1) {
    calculateBetweennessCentrality(graph);
  }
  if (centralityCount[2] === 1) {
    calculateClosenessCentrality(graph);
  }
  if (centralityCount[3] === 1) {
    calculateEccentricityCentrality(graph);
  }
console.log("this is top nodes",topNodes);
  // converting to JSON : => 
  topNodes = [...topNodes]
  tableContent = topNodes
let proteinDataCollection = [];
for(let i=0;i<topNodes.length;i++){
  for(let idx=0; idx < proteinIdSDB.length; idx++){
    if(proteinIdSDB[idx] === topNodes[i]){
      let data = 
          {"id" : proteinIdSDB[idx],
           "user":proteinName[idx],
            "description":proteinDetails[idx]
          }
      proteinDataCollection.push(data);
    }
  }
}

console.log("this is node data",proteinDataCollection)
// exports = proteinDataCollection;
  let nodes = proteinDataCollection;

  
    let visNetwork = {
      "nodes" : nodes,
      "links": JSON.parse(localStorage.getItem("dataKey")).links,
    }
    setVisGraphData(visNetwork)
  }, []);
  
//  console.log("this is the tableCont",tableContent);

  return( <div>
    <Header/>
    <div className="flex ">
    <Table data={ tableContent }/>
  <ForceGraph3D
  height={600}
  width={700}
    graphData={visGraphData}
    nodeId="id"
    linkCurvature={0.1}
    nodeLabel="user"
    nodeAutoColorBy="id"
  />
    </div>
    
  <Footer/>
</div>);
}

export default AnalyzedGraph;
