const rootUrl = "https://www.sunburst-design.com/papers/";

const cnotes = [
    {
        title: "Why Use Classes to Represent UVM Transactions?",
        shorttitle: "Why Use Classes for Transactions?",
        url: "Cummings_Why_Use_Classes_for_UVM_Transactions.pdf",
        rev: "1.0",
        revdate: "June 2015",
        tags: ["UVM", "SV"],
        cliffnote: "#5",
        training: "NA",
        note: "NA",
        author: "NA",
    },

    {
        title: "13 Reason Why UVM and OVM are Hard to Learn",
        shorttitle: "13 Reason Why UVM and OVM are Hard to Learn",
        url: "Cummings_Why_UVM_Is_Hard_To_Learn.pdf",
        rev: "1.1",
        revdate: "June 2022",
        tags: ["UVM", "SV"],
        cliffnote: "#4",
        training: "NA",
        note: "NA",
        author: "NA",
    },

    {
        title: "Are Advanced Verification Methodologies Required to Test FPGA Designs?",
        shorttitle: "Are Advanced Verification Methodologies Required to Test FPGA Designs?",
        url: "Cummings_FPGAVerification.pdf",
        rev: "1.0",
        revdate: "Nov 2012",
        tags: ["UVM", "SV"],
        cliffnote: "#3",
        training: "NA",
        note: "NA",
        author: "NA",
    },

    {
        title: "Common Mistakes In Technical Texts",
        shorttitle: "Common Mistakes In Technical Texts",
        url: "Technical_Text_Mistakes.pdf",
        rev: "1.1",
        revdate: "Mar 2009",
        tags: ["NA"],
        cliffnote: "#2",
        training: "NA",
        note: "NA",
        author: "NA",
    },

    {
        conf: "NA",
        year: "NA",
        confLoc: "NA",
        title: "The Sunburst Design - \"Where's Waldo\" Principle of Verilog Coding",
        shorttitle: "\"Where's Waldo\" Coding",
        url: "Wheres_Waldo_Coding.pdf",
        rev: "1.0",
        revdate: "Mar 2007",
        tags: ["RTL"],
        cliffnote: "#1",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },
]

const papers = [
    {
        conf: "DAC",
        year: "2008",
        confLoc: "NA",
        title: "SystemVerilog Implicit Port Enhancements<br>Accelerate System Design & Verification",
        shorttitle: "SystemVerilog Implicit Port Enhancements<br>Accelerate System Design & Verification",
        url: "CummingsDAC2008_DotStarPorts.pdf",
        rev: "1.1",
        revdate: "Nov 2008",
        tags: ["SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "DesignCon",
        year: "2005",
        confLoc: "NA",
        title: "SystemVerilog Implicit Port Connections - Simulation &amp Synthesis",
        shorttitle: "SystemVerilog Implicit Port Connections - Simulation &amp Synthesis",
        url: "CummingsDesignCon2005_SystemVerilog_ImplicitPorts.pdf",
        rev: "1.2",
        revdate: "Apr 2005",
        tags: ["SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "DVCON",
        year: "2023",
        confLoc: "NA",
        title: "The Untapped Power of UVM Resources and Why Engineers Should Use the uvm_resource_db API",
        shorttitle: "The Untapped Power of UVM Resources and Why Engineers Should Use the uvm_resource_db API",
        url: "CummingsDVCon2023_uvm_resource_db_API.pdf",
        rev: "1.2",
        revdate: "Mar 2023",
        tags: ["UVM", "SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "DVCON",
        year: "2020",
        confLoc: "NA",
        title: "UVM Reactive Stimulus Techniques",
        shorttitle: "UVM Reactive Stimulus Techniques",
        url: "CummingsDVCon2020_UVM_ReactiveStimulus.pdf",
        rev: "1.0",
        revdate: "Oct 2020",
        tags: ["UVM", "SV"],
        award: "1st",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "DVCON",
        year: "2019",
        confLoc: "NA",
        title: "Yikes! Why is My SystemVerilog Still So Slooooow?",
        shorttitle: "Yikes! Why is My SystemVerilog Still So Slooooow?",
        url: "CummingsDVCon2019_Yikes_SV_Coding_rev1_0.pdf",
        rev: "1.0",
        revdate: "Apr 2019",
        tags: ["SV"],
        award: "1st",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraurl: "http://www.sunburst-design.com/benchmark_code/DVCon2019/",
        xtra: "(Benchmark Code)",
    },

    {
        conf: "DVCON",
        year: "2016",
        confLoc: "NA",
        title: "Using UVM Virtual Sequencers & Virtual Sequences",
        shorttitle: "Using UVM Virtual Sequencers & Virtual Sequences",
        url: "CummingsDVCon2016_Vsequencers.pdf",
        rev: "1.1",
        revdate: "Sep 2019",
        tags: ["UVM", "SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "DVCON",
        year: "2011",
        confLoc: "NA",
        title: "OVM & UVM Techniques for Terminating Tests",
        shorttitle: "OVM & UVM Techniques for Terminating Tests",
        url: "CummingsDVCon2011_UVM_TerminationTechniques.pdf",
        rev: "1.1",
        revdate: "Mar 2011",
        tags: ["UVM", "SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "DVCON",
        year: "2003",
        confLoc: "NA",
        title: "The IEEE Verilog-2001 Simulation Tool Scoreboard",
        shorttitle: "The IEEE Verilog-2001 Simulation Tool Scoreboard",
        url: "CummingsDVCON2003_V2K1_SimScore.pdf",
        rev: "1.2",
        revdate: "Apr 2003",
        tags: ["VLOG"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "HDLCON",
        year: "2002",
        confLoc: "NA",
        title: "New Verilog-2001 Techniques for Creating Parmeterized Models<br>(or Down With `define and Death of a defparam!)",
        shorttitle: "New Verilog-2001 Techniques for Creating Parmeterized Models<br>(or Down With `define and Death of a defparam!)",
        url: "CummingsHDLCON2002_Parameters.pdf",
        rev: "1.2",
        revdate: "May 2002",
        tags: ["VLOG"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "HDLCON",
        year: "2002",
        confLoc: "NA",
        title: "SystemVerilog Ports & Data Types For Simple, Efficient and Enhanced HDL Modeling",
        shorttitle: "SystemVerilog Ports & Data Types For Simple, Efficient and Enhanced HDL Modeling",
        url: "CummingsHDLCON2002_SystemVerilogPorts.pdf",
        rev: "1.1",
        revdate: "Apr 2002",
        tags: ["SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "HDLCON",
        year: "2001",
        confLoc: "NA",
        title: "Verilog-2001 Behavioral and Synthesis Enhancements",
        shorttitle: "Verilog-2001 Behavioral and Synthesis Enhancements",
        url: "CummingsHDLCON2001_Verilog2001.pdf",
        rev: "1.3",
        revdate: "Apr 2002",
        tags: ["VLOG"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "HDLCON",
        year: "2000",
        confLoc: "NA",
        title: "A Proposal To Remove Those Ugly Register Data Types From Verilog",
        shorttitle: "A Proposal To Remove Those Ugly Register Data Types From Verilog",
        url: "CummingsHDLCON2000_RegProposal.pdf",
        rev: "1.1",
        revdate: "Mar 2001",
        tags: ["VLOG"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "HDLCON",
        year: "1999",
        confLoc: "NA",
        title: "Correct Methods For Adding Delays To Verilog Behavioral Models",
        shorttitle: "Correct Methods For Adding Delays To Verilog Behavioral Models",
        url: "CummingsHDLCON1999_BehavioralDelays_Rev1_1.pdf",
        rev: "1.1",
        revdate: "Mar 2001",
        tags: ["VLOG"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2024",
        confLoc: "(Silicon Valley)",
        title: "Understanding the UVM m_sequencer, p_sequencer Handles, and the `uvm_declare_p_sequencer Macro",
        shorttitle: "Understanding the UVM m_sequencer, p_sequencer Handles, and the `uvm_declare_p_sequencer Macro",
        url: "CummingsSNUG2024SV_m_sequencer_p_sequencer.pdf",
        rev: "1.0",
        revdate: "Apr 2024",
        tags: ["UVM", "SV"],
        award: "3rd",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2019",
        confLoc: "(Silicon Valley)",
        title: "Finite State Machine (FSM) Deisgn & Synthesis using SystemVerilog - Part I",
        shorttitle: "Finite State Machine (FSM) Deisgn & Synthesis using SystemVerilog - Part I",
        url: "CummingsSNUG2019SV_FSM1.pdf",
        rev: "1.0",
        revdate: "Feb 2019",
        tags: ["FSM", "SV"],
        award: "1st",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2018",
        confLoc: "(Austin)",
        title: "UVM Analysis Port Functionality and Using Transaction Copy Commands",
        shorttitle: "UVM Analysis Port Functionality and Using Transaction Copy Commands",
        url: "CummingsSNUG2018AUS_UVMAnalysisCopy.pdf",
        rev: "1.0",
        revdate: "Oct 2018",
        tags: ["UVM", "SV"],
        award: "2nd",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2018",
        confLoc: "(Silicon Valley)",
        title: "SystemVerilog Virtual Classes, Methods, Interfaces and Their Use in Verification and UVM",
        shorttitle: "SystemVerilog Virtual Classes, Methods, Interfaces and Their Use in Verification and UVM",
        url: "CummingsSNUG2018SV_Virtuals.pdf",
        rev: "1.0",
        revdate: "Jun 2018",
        tags: ["UVM", "SV"],
        award: "2nd",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2016",
        confLoc: "(Austin)",
        title: "Applying Stimulus & Sampling Outputs - UVM Verification Testing Techniques (Paper explains why SystemVerilog \"program\" was a bad idea and should never be used)",
        shorttitle: "Applying Stimulus & Sampling Outputs - UVM Verification Testing Techniques (Paper explains why SystemVerilog \"program\" was a bad idea and should never be used)",
        url: "CummingsSNUG2016AUS_VerificationTimingTesting.pdf",
        rev: "1.0",
        revdate: "Jun 2018",
        tags: ["UVM", "SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2016",
        confLoc: "(Silicon Valley)",
        title: "SystemVerilog Assertions - Bindfiles & Best Known Practices for Simple SVA Usage",
        shorttitle: "SystemVerilog Assertions - Bindfiles & Best Known Practices for Simple SVA Usage",
        url: "CummingsSNUG2016SV_SVA_Best_Practices.pdf",
        rev: "1.0",
        revdate: "Apr 2016",
        tags: ["UVM", "SV"],
        award: "1st",
        awardtype: "Paper",
        training: "Sunburst Design 6-hour SystemVerilog Assertion Training class available",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2016",
        confLoc: "(Silicon Valley)",
        title: "SystemVerilog Logic Specific Processes for Synthesis - Benefits and Proper Usage",
        shorttitle: "SystemVerilog Logic Specific Processes for Synthesis - Benefits and Proper Usage",
        url: "CummingsSNUG2016SV_SVLogicProcs.pdf",
        rev: "1.0",
        revdate: "Apr 2016",
        tags: ["RTL", "SV"],
        award: "2nd",
        awardtype: "Tech",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2014",
        confLoc: "(Austin)",
        title: "UVM Message Display Commands - Capabilities, Proper Usage and Guidelines",
        shorttitle: "UVM Message Display Commands - Capabilities, Proper Usage and Guidelines",
        url: "CummingsSNUG2014AUS_UVM_Messages.pdf",
        rev: "1.0",
        revdate: "Sep 2014",
        tags: ["UVM", "SV"],
        award: "1st",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2014",
        confLoc: "(Silicon Valley)",
        title: "UVM Transactions - Definitions, Methods and Usage",
        shorttitle: "UVM Transactions - Definitions, Methods and Usage",
        url: "CummingsSNUG2014SV_UVM_Transactions.pdf",
        rev: "1.1",
        revdate: "May 2014",
        tags: ["UVM", "SV"],
        award: "3rd",
        awardtype: "Tech",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2013",
        confLoc: "(Silicon Valley)",
        title: "OVM/UVM Scoreboards - Fundamental Architectures",
        shorttitle: "OVM/UVM Scoreboards - Fundamental Architectures",
        url: "CummingsSNUG2013SV_UVM_Scoreboards.pdf",
        rev: "1.1",
        revdate: "Oct 2014",
        tags: ["UVM", "SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2012",
        confLoc: "(Silicon Valley)",
        title: "The OVM/UVM Factory & Factory Overrides How They Work - Why They Are Important",
        shorttitle: "The OVM/UVM Factory & Factory Overrides How They Work - Why They Are Important",
        url: "CummingsSNUG2012SV_UVM_Factories.pdf",
        rev: "1.1",
        revdate: "Jan 2013",
        tags: ["UVM", "SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2009",
        confLoc: "(San Jose)",
        title: "SystemVerilog Assertions<br>Design Tricks & SVA Bind Files",
        shorttitle: "SystemVerilog Assertions<br>Design Tricks & SVA Bind Files",
        url: "CummingsSNUG2009SJ_SVA_Bind.pdf",
        rev: "1.0",
        revdate: "Mar 2009",
        tags: ["SVA", "SV"],
        award: "1st",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2009",
        confLoc: "(Boston)",
        title: "SystemVerilog's Virtual World - An Introduction to Virtual Classes, Veritual Methods and Virtual Interface Instance</font",
        shorttitle: "SystemVerilog's Virtual World - An Introduction to Virtual Classes, Veritual Methods and Virtual Interface Instance</font",
        url: "CummingsSNUG2009Boston_SVVirtual.pdf",
        rev: "1.4",
        revdate: "Sep 2009",
        tags: ["SV"],
        award: "2nd",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2008",
        confLoc: "(Boston)",
        title: "Clock Domain Crossing (CDC) Design & Verification<br>Techniques Using SystemVerilog",
        shorttitle: "Clock Domain Crossing (CDC) Design & Verification<br>Techniques Using SystemVerilog",
        url: "CummingsSNUG2008Boston_CDC.pdf",
        rev: "1.0",
        revdate: "Nov 2008",
        tags: ["CDC", "SV"],
        award: "1st",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2007",
        confLoc: "(Boston)",
        title: "SystemVerilog Implicit Port Enhancements<br>Accelerate System Design & Verification",
        shorttitle: "SystemVerilog Implicit Port Enhancements<br>Accelerate System Design & Verification",
        url: "CummingsSNUG2007Boston_DotStarPorts.pdf",
        rev: "1.1",
        revdate: "Nov 2007",
        tags: ["SV"],
        award: "1st",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2007",
        confLoc: "(Boston)",
        title: "SystemVerilog Event Regions, Race Avoidance & Guidelines",
        shorttitle: "SystemVerilog Event Regions, Race Avoidance & Guidelines",
        url: "CummingsSNUG2006Boston_SystemVerilog_Events.pdf",
        rev: "1.1",
        revdate: "Sep 2006",
        tags: ["SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2005",
        confLoc: "(Israel)",
        title: "SystemVerilog's priority & unique - A Solution to Verilog's \"full_case\" &amp \"parallel_case\" Evil Twins!",
        shorttitle: "SystemVerilog's priority & unique - A Solution to Verilog's \"full_case\" &amp \"parallel_case\" Evil Twins!",
        url: "CummingsSNUG2005Israel_SystemVerilog_UniquePriority.pdf",
        rev: "1.0",
        revdate: "Jan 2005",
        tags: ["RTL", "SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2004",
        confLoc: "(Boston)",
        title: "SystemVerilog 2-State Simulation Performance & Verification Advantages",
        shorttitle: "SystemVerilog 2-State Simulation Performance & Verification Advantages",
        url: "CummingsSNUG2004Boston_2StateSims.pdf",
        rev: "1.0",
        revdate: "Sep 2004",
        tags: ["SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2003",
        confLoc: "(Boston)",
        title: "SystemVerilog - Is This The Merging of Verilog & VHDL?",
        shorttitle: "SystemVerilog - Is This The Merging of Verilog & VHDL?",
        url: "CummingsSNUG2003Boston_SystemVerilog_VHDL.pdf",
        rev: "1.1",
        revdate: "Sep 2003",
        tags: ["SV"],
        award: "3rd",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2003",
        confLoc: "(Boston)",
        title: "Asynchronous & Synchronous Reset<br>Design Techniques - Part Deux",
        shorttitle: "Asynchronous & Synchronous Reset<br>Design Techniques - Part Deux",
        url: "CummingsSNUG2003Boston_Resets.pdf",
        rev: "1.1",
        revdate: "Sep 2003",
        tags: ["CDC", "SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2003",
        confLoc: "(San Jose)",
        title: "Synthesizable Finite State Machine Design Techniques<br>Using the New SystemVerilog 3.0 Enhancements",
        shorttitle: "Synthesizable Finite State Machine Design Techniques<br>Using the New SystemVerilog 3.0 Enhancements",
        url: "CummingsSNUG2003SJ_SystemVerilogFSM.pdf",
        rev: "1.1",
        revdate: "Mar 2003",
        tags: ["FSM", "SV"],
        award: "2nd",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2002",
        confLoc: "(Boston)",
        title: "Verilog Nonblocking Assignments With Delays, Myths & Mysteries",
        shorttitle: "Verilog Nonblocking Assignments With Delays, Myths & Mysteries",
        url: "CummingsSNUG2002Boston_NBAwithDelays.pdf",
        rev: "1.3",
        revdate: "Dec 2002",
        tags: ["VLOG"],
        award: "2nd",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2002",
        confLoc: "(San Jose)",
        title: "Simulation and Synthesis Techniques for Asynchronous FIFO Design with Asynchronous Pointer Comparisons",
        shorttitle: "Simulation and Synthesis Techniques for Asynchronous FIFO Design with Asynchronous Pointer Comparisons",
        url: "CummingsSNUG2002SJ_FIFO2.pdf",
        rev: "1.1",
        revdate: "Apr 2002",
        tags: ["CDC", "VLOG"],
        award: "1st",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2002",
        confLoc: "(San Jose)",
        title: "Simulation and Synthesis Techniques for Asynchronous FIFO Design",
        shorttitle: "Simulation and Synthesis Techniques for Asynchronous FIFO Design",
        url: "CummingsSNUG2002SJ_FIFO1.pdf",
        rev: "1.1",
        revdate: "Apr 2002",
        tags: ["CDC", "VLOG"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2002",
        confLoc: "(San Jose)",
        title: "Synchronous Resets? Asynchronous Resets? I am so confused!  How will I ever know which to use?",
        shorttitle: "Synchronous Resets? Asynchronous Resets? I am so confused!  How will I ever know which to use?",
        url: "CummingsSNUG2002SJ_Resets.pdf",
        rev: "1.1",
        revdate: "Apr 2002",
        tags: ["CDC", "VLOG"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2001",
        confLoc: "(San Jose)",
        title: "Synthesis and Scripting Techniques for Designing Multi-Asynchronous Clock Designs",
        shorttitle: "Synthesis and Scripting Techniques for Designing Multi-Asynchronous Clock Designs",
        url: "CummingsSNUG2001SJ_AsyncClk.pdf",
        rev: "1.1",
        revdate: "Mar 2001",
        tags: ["CDC", "VLOG"],
        award: "3rd",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2000",
        confLoc: "(Boston)",
        title: "Coding And Scripting Techniques For FSM Designs With Synthesis-Optimized, Glitch-Free Outputs",
        shorttitle: "Coding And Scripting Techniques For FSM Designs With Synthesis-Optimized, Glitch-Free Outputs",
        url: "CummingsSNUG2000Boston_FSM.pdf",
        rev: "1.2",
        revdate: "May 2002",
        tags: ["FSM", "VLOG"],
        award: "2nd",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2000",
        confLoc: "(San Jose)",
        title: "Nonblocking Assignments in Verilog Synthesis, Coding Styles That Kill!",
        shorttitle: "Nonblocking Assignments in Verilog Synthesis, Coding Styles That Kill!",
        url: "CummingsSNUG2000SJ_NBA.pdf",
        rev: "1.3",
        revdate: "Sep 2009",
        tags: ["VLOG"],
        award: "1st",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "1999",
        confLoc: "(Boston)",
        title: "\"full_case parallel_case\", the Evil Twins of Verilog Synthesis",
        shorttitle: "\"full_case parallel_case\", the Evil Twins of Verilog Synthesis",
        url: "CummingsSNUG1999Boston_FullParallelCase.pdf",
        rev: "1.1",
        revdate: "Oct 2000",
        tags: ["VLOG"],
        award: "1st",
        awardtype: "Paper",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "1999",
        confLoc: "(San Jose)",
        title: "RTL Coding Styles That Yield Simulation and Synthesis Mismatches",
        shorttitle: "RTL Coding Styles That Yield Simulation and Synthesis Mismatches",
        url: "CummingsSNUG1999SJ_SynthMismatch.pdf",
        rev: "1.1",
        revdate: "Oct 2000",
        tags: ["VLOG"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "1999",
        confLoc: "(San Jose)",
        title: "fsm_perl: A Script to Generate RTL Code for State Machines and Synopsys Synthesis Scripts",
        shorttitle: "fsm_perl: A Script to Generate RTL Code for State Machines and Synopsys Synthesis Scripts",
        url: "CummingsSNUG1999SJ_fsm_perl.pdf",
        rev: "1.1",
        revdate: "Sep 2001",
        tags: ["FSM", "VLOG"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "fsm_perl script<br>temporarily<br>unavailable",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "1998",
        confLoc: "(San Jose)",
        title: "State Machine Coding Styles for Synthesis",
        shorttitle: "State Machine Coding Styles for Synthesis",
        url: "CummingsSNUG1998SJ_FSM.pdf",
        rev: "1.1",
        revdate: "Sep 2002",
        tags: ["FSM", "VLOG"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "ICU",
        year: "2002",
        confLoc: "NA",
        title: "The Fundamentals of Efficient Synthesizable Finite State Machine<br>Design using NC-Verilog and BuildGates",
        shorttitle: "The Fundamentals of Efficient Synthesizable Finite State Machine<br>Design using NC-Verilog and BuildGates",
        url: "CummingsICU2002_FSMFundamentals.pdf",
        rev: "1.1",
        revdate: "Jul 2002",
        tags: ["FSM", "VLOG"],
        award: "2nd",
        awardtype: "ICsig",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "ICU",
        year: "1997",
        confLoc: "NA",
        title: "Verilog Coding Styles For Improved Simulation Efficiency",
        shorttitle: "Verilog Coding Styles For Improved Simulation Efficiency",
        url: "CummingsICU1997_VerilogCodingEfficiency.pdf",
        rev: "1.1",
        revdate: "Jan 2002",
        tags: ["VLOG"],
        award: "1st",
        awardtype: "CAEsig",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "ICU",
        year: "1993",
        confLoc: "NA",
        title: "Passive Device Verilog Models For Board And System-Level Digital Simulation",
        shorttitle: "Passive Device Verilog Models For Board And System-Level Digital Simulation",
        url: "CummingsICU1993_PassiveDevices.pdf",
        rev: "1.1",
        revdate: "Oct 2004",
        tags: ["VLOG"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },
];

const dacs = [
    {
        conf: "DAC",
        year: "2013",
        confLoc: "NA",
        title: "The New SystemVerilog-2012 Standard",
        shorttitle: "The New SystemVerilog-2012 Standard",
        url: "SV2012_SunburstDesign_DAC2013_bw.pdf",
        rev: "1.0",
        revdate: "Jun 2013",
        tags: ["SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "Cliff",
        xtraUrl: "NA",
        xtra: "DAC Slides",
    },

    {
        conf: "DAC",
        year: "2009",
        confLoc: "NA",
        title: "SystemVerilog-2009 Update - Part 1 - DAC Slides (color)",
        shorttitle: "SV-2009 Update - Part 1",
        url: "DAC2009_SystemVerilog_Update_Part1_SunburstDesign.pdf",
        rev: "1.1",
        revdate: "Aug 2009",
        tags: ["SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "Cliff",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "DAC",
        year: "2009",
        confLoc: "NA",
        title: "SystemVerilog-2009 Update - Part 1 - DAC Slides (bw)",
        shorttitle: "SV-2009 Update - Part 1 (bw)",
        url: "DAC2009_SystemVerilog_Update_Part1_SunburstDesign_BW.pdf",
        rev: "1.1",
        revdate: "Aug 2009",
        tags: ["SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "Cliff",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "DAC",
        year: "2009",
        confLoc: "NA",
        title: "SystemVerilog-2009 Update - Part 2 - DAC Slides (color)",
        shorttitle: "SV-2009 Update - Part 2",
        url: "DAC2009_SystemVerilog_Update_Part2_SutherlandHDL.pdf",
        rev: "1.1",
        revdate: "Aug 2009",
        tags: ["SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "Stu",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "DAC",
        year: "2009",
        confLoc: "NA",
        title: "SystemVerilog-2009 Update - Part 2 - DAC Slides",
        shorttitle: "SV-2009 Update - Part 2",
        url: "DAC2009_SystemVerilog_Update_Part2_SutherlandHDL.pdf",
        rev: "1.1",
        revdate: "Aug 2009",
        tags: ["SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "Stu",
        xtraUrl: "NA",
        xtra: "NA",
    },
];

const recommendeds = [
    {
        conf: "SNUG",
        year: "2013",
        confLoc: "(Silicon Valley)",
        title: "Reset Testing Made Simple with UVM Phases (Paper)",
        shorttitle: "UVM Reset Testing (Paper)",
        url: "HunterSNUGSV_UVM_Resets_paper.pdf",
        rev: "1.0",
        revdate: "NA",
        tags: ["UVM", "SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "Brian Hunter, Ben Chen, Rebecca Lipon",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2013",
        confLoc: "(Silicon Valley)",
        title: "Reset Testing Made Simple with UVM Phases (Slides)",
        shorttitle: "UVM Reset Testing (Slides)",
        url: "HunterSNUGSV_UVM_Resets_pres.pdf",
        rev: "1.0",
        revdate: "NA",
        tags: ["UVM", "SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "Brian Hunter, Ben Chen, Rebecca Lipon",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "SNUG",
        year: "2013",
        confLoc: "(Silicon Valley)",
        title: "Reset Testing Made Simple - Examples (tarfile)",
        shorttitle: "UVM Reset Testing (tarfile)",
        url: "HunterSNUGSV_UVM_Resets_examples.tar.gz",
        rev: "1.0",
        revdate: "NA",
        tags: ["UVM", "SV"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "Brian Hunter, Ben Chen, Rebecca Lipon",
        xtraUrl: "NA",
        xtra: "NA",
    },
];

const otherpapers = [
    {
        conf: "ICU",
        year: "1996",
        confLoc: "NA",
        title: "Simulating Altera FPGAs using Concept Schematics and Verilog-XL",
        shorttitle: "Short Title",
        url: "NA",
        rev: "NA",
        revdate: "NA",
        tags: ["VLOG", "BEH"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "ICU",
        year: "1996",
        confLoc: "NA",
        title: "Veriloglink User Case Study - Large Verilog System Simulation Experiences",
        shorttitle: "Short Title",
        url: "NA",
        rev: "NA",
        revdate: "NA",
        tags: ["VLOG", "BEH"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "ICU",
        year: "1995",
        confLoc: "NA",
        title: "Efficient Verilog Modeling Using DAMEM",
        shorttitle: "Short Title",
        url: "NA",
        rev: "NA",
        revdate: "NA",
        tags: ["VLOG", "BEH"],
        award: "1st",
        awardtype: "CAEsig",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "ICU",
        year: "1994",
        confLoc: "NA",
        title: "Translating Concept Schematics to Verilog Simulation using VerilogLink, A Users Experience",
        shorttitle: "Short Title",
        url: "NA",
        rev: "NA",
        revdate: "NA",
        tags: ["VLOG", "BEH"],
        award: "1st",
        awardtype: "CAEsig",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "IVC",
        year: "1994",
        confLoc: "NA",
        title: "ASIC Test Vector Generation",
        shorttitle: "Short Title",
        url: "NA",
        rev: "NA",
        revdate: "NA",
        tags: ["VLOG", "BEH"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "IVC",
        year: "1994",
        confLoc: "NA",
        title: "Verilog Simulation of Xilinx Designs",
        shorttitle: "Short Title",
        url: "NA",
        rev: "NA",
        revdate: "NA",
        tags: ["VLOG", "BEH"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "ICU",
        year: "1993",
        confLoc: "NA",
        title: "Full Timing Simulations Of One And Multiple Xilinx Designs Using Concept Schematics and Verilog HDL",
        shorttitle: "Short Title",
        url: "NA",
        rev: "NA",
        revdate: "NA",
        tags: ["VLOG", "BEH"],
        award: "1st",
        awardtype: "CAEsig",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "ICU",
        year: "1993",
        confLoc: "NA",
        title: "Mixed Gate and Behavioral Simulations Using Concept Schematics and Verilog HDL",
        shorttitle: "Short Title",
        url: "NA",
        rev: "NA",
        revdate: "NA",
        tags: ["VLOG", "BEH"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },

    {
        conf: "ICU",
        year: "1993",
        confLoc: "NA",
        title: "Synthesizing ASIC Vectors with Verilog",
        shorttitle: "Short Title",
        url: "NA",
        rev: "NA",
        revdate: "NA",
        tags: ["VLOG", "BEH"],
        award: "NA",
        awardtype: "NA",
        training: "NA",
        note: "NA",
        author: "NA",
        xtraUrl: "NA",
        xtra: "NA",
    },
];

createCnotesTable(cnotes);
createPapersTable(papers);
createDacTable(dacs);
createRecommendsTable(recommendeds);
createOthersTable(otherpapers);

function createCnotesTable(filtered) {
    // console.log("Starting createCnotesTable function-1");
    // Clear out existing innerWidth-created table
    document.getElementById("cliffnotes").innerHTML = "";
    // Get the table once
    let table = document.getElementById("cliffnotes")

    // Now append rows and table-data to the table
    filtered.forEach(cnote => {
        let row = document.createElement("tr");
        let conference = document.createElement("td");
        let title = document.createElement("td");
        let revision = document.createElement("td");

        if (cnote.cliffnote == "NA") {
            conference.innerHTML = `<td></td>`;
        } else {
            conference.innerHTML = `<div class="item1"><td>Cliff-Note ${cnote.cliffnote}</td></div>`;
        }

        title.innerHTML = `<td><a href="${rootUrl}${cnote.url}">${cnote.title}</a></td>`;
        revision.innerHTML = `<div class="itemrev">Rev ${cnote.rev}<br>${cnote.revdate}</td></div>`

        row.appendChild(conference);
        row.appendChild(title);
        row.appendChild(revision);
        table.appendChild(row);
    })
}

function createPapersTable(filtered) {
    // console.log("Starting createPapersTable function-2");
    // Clear out existing innerWidth-created table
    document.getElementById("cliffpapers").innerHTML = "";
    // Get the table once
    let table = document.getElementById("cliffpapers");
    // let table = [];

    // Now append rows and table-data to the table
    filtered.forEach(paper => {
        // console.log(`${paper.conf} ${paper.year}`);

        let row = document.createElement("tr");
        let conference = document.createElement("td");
        let title = document.createElement("td");
        let revision = document.createElement("td");
        let award = document.createElement("td");

        if (paper.conf == "NA") {
            if (paper.cliffnote == "NA") {
                conference.innerHTML = `<td></td>`;
            } else {
                conference.innerHTML = `<td>Cliff-Note ${paper.cliffnote}</td>`;
            }
        } else {
            conference.innerHTML = `<div class="item1"><td>${paper.conf}<br>${paper.year}</td><div>`;
        }
        // Linking to papers on sunburst-design.com/papers page
        title.innerHTML = `<td><a href="${rootUrl}${paper.url}">${paper.title}</a></td>`;
        // title.innerHTML = `<td><a href="https://${paper.url}">${paper.title}</a></td>`;
        // title.innerHTML = `<td>${paper.title}</td>`;
        revision.innerHTML = `<div class="itemrev"><td>Rev ${paper.rev}<br>${paper.revdate}</td></div>`
        switch (paper.awardtype) {
            case "Paper":
                award.innerHTML = `<div class="itempaper"><td>Voted Best Paper<br>${paper.award} Place</td></div>`;
                break;
            case "Tech":
                award.innerHTML = `<div class="itemtech"><td>Tech Paper Award<br>${paper.award} Place</td></div>`;
                break;
            case "CAEsig":
                award.innerHTML = `<div class="itemsig"><td>Voted Best Paper<br>${paper.award} Place - CAE SIG</td></div>`;
                break;
            case "ICsig":
                award.innerHTML = `<div class="itemsig"><td>Voted Best Paper<br>${paper.award} Place - IC SIG</td></div>`;
                break;
            default:
                award.innerHTML = `<td></td>`;
                break;
        }

        row.appendChild(conference);
        row.appendChild(title);
        row.appendChild(revision);
        row.appendChild(award);
        table.appendChild(row);
    })
}

function createDacTable(filtered) {
    // console.log("Starting createDacTable function-2B");
    // Clear out existing innerWidth-created table
    document.getElementById("dacpresentations").innerHTML = "";
    // Get the table once
    let table = document.getElementById("dacpresentations")

    // Now append rows and table-data to the table
    filtered.forEach(dac => {
        let row = document.createElement("tr");
        let conference = document.createElement("td");
        let title = document.createElement("td");

        conference.innerHTML = `<div class="item1"><td>${dac.conf}<br>${dac.year}</td></div>`;
        title.innerHTML = `<td><a href="${rootUrl}${dac.url}">${dac.title}</a></td>`;

        row.appendChild(conference);
        row.appendChild(title);
        table.appendChild(row);
    })
}

function createRecommendsTable(filtered) {
    // console.log("Starting createRecommendsTable function-3");
    // Clear out existing innerWidth-created table
    document.getElementById("recommends").innerHTML = "";
    // Get the table once
    let table = document.getElementById("recommends")

    // Now append rows and table-data to the table
    filtered.forEach(recommend => {
        let row = document.createElement("tr");
        let conference = document.createElement("td");
        let title = document.createElement("td");

        conference.innerHTML = `<div class="item1"><td>${recommend.conf}<br>${recommend.year}</td></div>`;
        title.innerHTML = `<td><a href="${rootUrl}${recommend.url}">${recommend.title}</a></td>`;

        row.appendChild(conference);
        row.appendChild(title);
        table.appendChild(row);
    })
}

function createOthersTable(filtered) {
    // console.log("Starting createOthersTable function-4");
        // Clear out existing innerWidth-created table
        document.getElementById("nonpublished").innerHTML = "";
    // Get the table once
    let table = document.getElementById("nonpublished")

    // Now append rows and table-data to the table
    filtered.forEach(xtra => {
        let row = document.createElement("tr");
        let conference = document.createElement("td");
        let title = document.createElement("td");
        let award = document.createElement("td");

        conference.innerHTML = `<div class="item1"><td>${xtra.conf}<br>${xtra.year}</td></div>`;
        title.innerHTML = `<td>${xtra.title}</td>`;
        // revision.innerHTML = `<td>Rev ${xtra.rev}<br>${xtra.revdate}</td>`
        switch (xtra.awardtype) {
            case "CAEsig":
                award.innerHTML = `<div class=itemsig><td>Voted Best Paper<br>${xtra.award} Place - CAE SIG</td></div>`;
                break;
            default:
                award.innerHTML = `<td></td>`;
                break;
        }

        row.appendChild(conference);
        row.appendChild(title);
        row.appendChild(award);
        table.appendChild(row);
    })
}

function createAllTables(tag) {
    let filteredcnotes = cnotes;
    let filteredpapers = papers;
    let filtereddacs = dacs;
    let filteredrecs = recommendeds;
    let filteredothers = otherpapers;

    if (tag == "ALL") {
        // console.log("ALL Button clicked");
        createCnotesTable(filteredcnotes);
        createPapersTable(filteredpapers);
        createDacTable(filtereddacs);
        createRecommendsTable(filteredrecs);
        createOthersTable(filteredothers);
    } else {
        filteredcnotes = cnotes.filter      (cnotes       => cnotes.tags.includes      (tag));
        filteredpapers = papers.filter      (papers       => papers.tags.includes      (tag));
        filtereddacs   = dacs.filter        (dacs         => dacs.tags.includes        (tag));
        filteredrecs   = recommendeds.filter(recommendeds => recommendeds.tags.includes(tag));
        filteredothers = otherpapers.filter (otherpapers  => otherpapers.tags.includes (tag));
        createCnotesTable    (filteredcnotes);
        createPapersTable    (filteredpapers);
        createDacTable       (filtereddacs);
        createRecommendsTable(filteredrecs);
        createOthersTable    (filteredothers);
    }
    // console.log for Debugging
    // console.log("---------------------------");
    // console.log("CLIFF-NOTES");
    // console.log(filteredcnotes);
    // console.log("PAPERS");
    // console.log(filteredpapers);
    // console.log("DAC PAPERS");
    // console.log(filtereddacs);
    // console.log("RECOMMENDED");
    // console.log(filteredrecs);
    // console.log("OTHER PAPERS");
    // console.log(filteredothers);
}

//-------------------------------------------------------------------------------
// Number of Reviews - local storage (numberReviews-ls)
//-------------------------------------------------------------------------------
const alllink = document.querySelector("#all");
const uvmlink = document.querySelector("#uvm");
const svlink  = document.querySelector("#sv");
const cdclink = document.querySelector("#cdc");
const fsmlink = document.querySelector("#fsm");

// ALL button - get all papers
alllink.addEventListener('click', () => {
    createAllTables("ALL");
})

uvmlink.addEventListener('click', () => {
    createAllTables("UVM");
})

svlink.addEventListener('click', () => {
    createAllTables("SV");
})

cdclink.addEventListener('click', () => {
    createAllTables("CDC");
})

fsmlink.addEventListener('click', () => {
    createAllTables("FSM");
})


// let numberReviews = Number(window.localStorage.getItem("numberReviews-ls"));
// numberReviews.textContent = `Number of reviews submitted: ${numberReviews}`;

// numberReviews++;
// localStorage.setItem("numberReviews-ls", numberReviews);