"use client"
import Script from 'next/script';
// import { useEffect, useState } from 'react';
// import { Textarea } from './ui/textarea';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ClipboardJS from 'clipboard';


// const FontGenerator = () => {
//   useEffect(() => {
//     const clipboard = new ClipboardJS('.copybutton', {
//       text: (trigger) => {
//         // Check if text is selected
//         // @ts-ignore
//         const selection = window.getSelection().toString();
//         if (selection) {
//           toast.info('Text is already selected.');
//           return ''; // Return empty string to prevent copying selected text
//         }
  
//         // If text is not selected, return the text to be copied
//         const targetId = trigger.getAttribute('data-clipboard-target') as string; // Type assertion
//         const copyableText = document.querySelector(targetId) as HTMLElement | null;
//         if (copyableText) {
//           return copyableText.innerText;
//         }
  
//         return ''; // Return empty string as a fallback
//       },
//     });
  
//     clipboard.on('success', () => {
//       toast.success('Text copied successfully!');
//     });
  
//     clipboard.on('error', () => {
//       toast.error('Failed to copy text. Please try again.');
//     });
  
//     return () => {
//       clipboard.destroy();
//     };
//   }, []);

//   useEffect(() => {
//     // Include jQuery script
//     const script = document.createElement('script');
//     script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js';
//     script.async = true;
//     document.head.appendChild(script);

//     // Your jQuery code can be added here if necessary
//   }, []);

//   return (
//     <div>
//       <h1 className='text-3xl'>Fancy Font Generator</h1>
//       <Textarea className="form-control fancytext" name="text"
//  placeholder="Type or paste text here.."  ></Textarea>
//       <br />
//       <div id="result" className='grid grid-cols-1 sm:grid-cols-3 gap-12'>
//       <div className="copy-container" id="copy_0">
//         <div className="copyable-text">𝔓𝔯𝔢𝔳𝔦𝔢𝔴 𝔗𝔢𝔵𝔱</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_0 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_1">
//         <div className="copyable-text">𝕻𝖗𝖊𝖛𝖎𝖊𝖜 𝕿𝖊𝖝𝖙</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_1 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_2">
//         <div className="copyable-text">✋♪  Ƥ𝔯Ⓔᐯ𝔦乇ω т乇𝐗𝐭  😈🌷</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_2 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_3">
//         <div className="copyable-text">𝓟𝓻𝓮𝓿𝓲𝓮𝔀 𝓣𝓮𝔁𝓽</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_3 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_4">
//         <div className="copyable-text">𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_4 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_5">
//         <div className="copyable-text">ℙ𝕣𝕖𝕧𝕚𝕖𝕨 𝕋𝕖𝕩𝕥</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_5 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_6">
//         <div className="copyable-text">Ｐｒｅｖｉｅｗ Ｔｅｘｔ</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_6 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_7">
//         <div className="copyable-text">🐓 ⋆ 🐤 🎀 𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉 🎀 🐤 ⋆ 🐓</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_7 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_8">
//         <div className="copyable-text">ᴘʀᴇᴠɪᴇᴡ ᴛᴇxᴛ</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_8 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_9">
//         <div className="copyable-text">ʇxǝ⊥ ʍǝıʌǝɹԀ</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_9 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_12">
//         <div className="copyable-text">🄿🅁🄴🅅🄸🄴🅆 🅃🄴🅇🅃</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_12 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_13">
//         <div className="copyable-text">ƚxɘT wɘivɘɿꟼ</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_13 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_15">
//         <div className="copyable-text">🅿🆁🅴🆅🅸🅴🆆 🆃🅴🆇🆃</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_15 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>

//       <div className="copy-container" id="copy_16">
//         <div className="copyable-text">ₚᵣₑᵥᵢₑw ₜₑₓₜ</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_16 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_17">
//         <div className="copyable-text">ᴾʳᵉᵛⁱᵉʷ ᵀᵉˣᵗ</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_17 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_18">
//         <div className="copyable-text">Ⓟⓡⓔⓥⓘⓔⓦ Ⓣⓔⓧⓣ</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_18 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_19">
//         <div className="copyable-text">קгєשเєฬ ՇєאՇ</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_19 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_20">
//         <div className="copyable-text">Pɾҽʋιҽɯ Tҽxƚ</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_20 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_21">
//         <div className="copyable-text">քʀɛʋɨɛա ȶɛӼȶ</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_21 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_22">
//         <div className="copyable-text">ᎮᏒᏋᏉᎥᏋᏇ ᏖᏋጀᏖ</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_22 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_23">
//         <div className="copyable-text">℘ཞɛ۷ıɛῳ ɬɛҳɬ</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_23 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_24">
//         <div className="copyable-text">prēงiēຟ tēxt</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_24 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_25">
//         <div className="copyable-text">𝐏𝐫𝐞𝐯𝐢𝐞𝐰 𝐓𝐞𝐱𝐭</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_25 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_26">
//         <div className="copyable-text">𝗣𝗿𝗲𝘃𝗶𝗲𝘄 𝗧𝗲𝘅𝘁</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_26 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_27">
//         <div className="copyable-text">𝘗𝘳𝘦𝘷𝘪𝘦𝘸 𝘛𝘦𝘹𝘵</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_27 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_28">
//         <div className="copyable-text">𝙋𝙧𝙚𝙫𝙞𝙚𝙬 𝙏𝙚𝙭𝙩</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_28 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_29">
//         <div className="copyable-text">𝙋𝚛𝚎𝚟𝚒𝚎𝚠 𝚃𝚎𝚡𝚝</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_29 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_30">
//         <div className="copyable-text">PЯΣVIΣЩ ƬΣXƬ</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_30 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_31">
//         <div className="copyable-text">ρяєνιєω тєχт</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_31 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_32">
//         <div className="copyable-text">þrêvïêw †êx†</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_32 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_33">
//         <div className="copyable-text">₱ⱤɆVłɆ₩ ₮ɆӾ₮</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_33 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_34">
//         <div className="copyable-text">卩尺乇ᐯ丨乇山 ㄒ乇乂ㄒ</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_34 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_35">
//         <div className="copyable-text">ｱ尺乇√ﾉ乇W ｲ乇ﾒｲ</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_35 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_36">
//         <div className="copyable-text">【P】【r】【e】【v】【i】【e】【w】 【T】【e】【x】【t】</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_36 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_37">
//         <div className="copyable-text">『P』『r』『e』『v』『i』『e』『w』 『T』『e』『x』『t』</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_37 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_38">
//         <div className="copyable-text">≋P≋r≋e≋v≋i≋e≋w≋ ≋T≋e≋x≋t≋</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_38 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_39">
//         <div className="copyable-text">░P░r░e░v░i░e░w░ ░T░e░x░t░</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_39 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_40">
//         <div className="copyable-text">(っ◔◡◔)っ ♥ Preview Text ♥</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_40 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_41">
//         <div className="copyable-text">Ｐｒｅｖｉｅｗ　Ｔｅｘｔ　閲ワョ</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_41 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_42">
//         <div className="copyable-text">Ｐｒｅｖｉｅｗ░Ｔｅｘｔ　（閲ワョ）</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_42 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_43">
//         <div className="copyable-text">【&#65279;Ｐｒｅｖｉｅｗ　Ｔｅｘｔ】</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_43 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_44">
//         <div className="copyable-text">˜”*°•.˜”*°• Preview Text •°*”˜.•°*”˜</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_44 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_45">
//         <div className="copyable-text">[̲̅P][̲̅r][̲̅e][̲̅v][̲̅i][̲̅e][̲̅w] [̲̅T][̲̅e][̲̅x][̲̅t]</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_45 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_46">
//         <div className="copyable-text">P҉r҉e҉v҉i҉e҉w҉ ҉T҉e҉x҉t҉</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_46 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_47">
//         <div className="copyable-text">φɾҽѵìҽա Ͳҽ×է</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_47 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_48">
//         <div className="copyable-text">ᑭᖇEᐯIEᗯ TE᙭T</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_48 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_49">
//         <div className="copyable-text">ᕵᖇᘿᐺᓰᘿᘺ ᖶᘿ᙭ᖶ</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_49 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_50">
//         <div className="copyable-text">P̶r̶e̶v̶i̶e̶w̶ ̶T̶e̶x̶t̶</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_50 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_51">
//         <div className="copyable-text">P̴r̴e̴v̴i̴e̴w̴ ̴T̴e̴x̴t̴</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_51 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_52">
//         <div className="copyable-text">P̷r̷e̷v̷i̷e̷w̷ ̷T̷e̷x̷t̷</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_52 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_53">
//         <div className="copyable-text">P̲r̲e̲v̲i̲e̲w̲ ̲T̲e̲x̲t̲</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_53 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_54">
//         <div className="copyable-text">P̳r̳e̳v̳i̳e̳w̳ ̳T̳e̳x̳t̳</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_54 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_55">
//         <div className="copyable-text">P̾r̾e̾v̾i̾e̾w̾ ̾T̾e̾x̾t̾</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_55 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_56">
//         <div className="copyable-text">P♥r♥e♥v♥i♥e♥w♥ ♥T♥e♥x♥t</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_56 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_57">
//         <div className="copyable-text">P͎r͎e͎v͎i͎e͎w͎ ͎T͎e͎x͎t͎</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_57 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_58">
//         <div className="copyable-text">P͓̽r͓̽e͓̽v͓̽i͓̽e͓̽w͓̽ ͓̽T͓̽e͓̽x͓̽t͓̽</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_58 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_59">
//         <div className="copyable-text">Wingdings: 🏱︎❒︎♏︎❖︎♓︎♏︎⬥︎ ❄︎♏︎⌧︎⧫︎</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_59 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_60">
//         <div className="copyable-text">✴ 🎀 𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉 🎀 ✴</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_60 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_61">
//         <div className="copyable-text">✶ 🎀 𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉 🎀 ✶</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_61 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_62">
//         <div className="copyable-text">✴｡ 🎀 𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉 🎀 ｡✴</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_62 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_63">
//         <div className="copyable-text">🐳 🎀 𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉 🎀 🐳</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_63 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_64">
//         <div className="copyable-text">—(••÷ 🎀 𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉 🎀 ÷••(—</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_64 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_65">
//         <div className="copyable-text">👊😎 𝓟яε𝐯ᶤ€ʷ 𝓉ᵉ𝔁𝓣 ★🐙</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_65 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_66">
//         <div className="copyable-text">💀♪ 𝕡𝕣Ⓔᐯᶤ𝐄ω 丅乇𝐗Ť ☞🐙</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_66 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_67">
//         <div className="copyable-text">`•.¸¸.•´´¯`••._.• ρⓡєⓥเ𝓔Ŵ 𝓣ε𝔁𝔱 •._.••`¯´´•.¸¸.•`</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_67 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_68">
//         <div className="copyable-text">🐣💜 ƤяⒺν𝓘ᵉᗯ тᵉＸ𝐭 🎃🐠</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_68 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_69">
//         <div className="copyable-text">|!¤*'~``~'*¤!| ρŕ𝑒𝕍เⓔ𝓦 ţ𝔼𝔵Ŧ |!¤*'~``~'*¤!|</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_69 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_70">
//         <div className="copyable-text">♘💔 קŕᵉ𝐯ｉ𝐄Ⓦ 𝐓ｅｘ𝐭 ♗🐸</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_70 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_71">
//         <div className="copyable-text">🐲😎 𝓅ŕⓔᵛĮ𝐞𝓌 Ť𝒆𝓧𝔱 ☢♙</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_71 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_72">
//         <div className="copyable-text">¸,ø¤º°`°º¤ø,¸¸,ø¤º° ρ𝓇є𝐕𝒾€ฬ Ŧεｘ𝐭 °º¤ø,¸¸,ø¤º°`°º¤ø,¸</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_72 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_73">
//         <div className="copyable-text">👣🎯 ρᖇᗴνᶤ𝐞𝐚𝐖 𝔱Ẹ𝔵𝓣 ✊🍧</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_73 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_74">
//         <div className="copyable-text">🍔🍓 ρŕє𝐯𝔦є𝓌 Ⓣε𝕩𝓣 🍟🐠</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_74 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_75">
//         <div className="copyable-text">░▒▓█►─═ 𝓅ＲẸV𝐢εᗯ 𝓉𝒆𝕩𝓽 ═─◄█▓▒░</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_75 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_76">
//         <div className="copyable-text">|I•--»ᑭＲ乇𝕧Ꭵｅ𝔀 𝐓€ｘ丅«--•I|</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_76 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_77">
//         <div className="copyable-text">♧☹  𝔭Ř𝐄ν𝒾ε𝐖 𝕥є𝓍𝓽  💜♝</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_77 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_78">
//         <div className="copyable-text">💞🎄  ƤＲ乇ѶĮⒺ𝓌 ᵗｅ𝔁𝐭  👤♕</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_78 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_79">
//         <div className="copyable-text">🐊♤  ⓟ𝓇ⒺV𝓲ｅｗ Ťєｘ𝐭  🐳👺</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_79 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_80">
//         <div className="copyable-text">🎄🎅  𝓹ⓇᵉVƗє𝓦 𝓣εχ𝐓  ♨🍩</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_80 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_81">
//         <div className="copyable-text">💢♖  ｐг𝕖𝐕ᶤє𝐖 Ｔ𝔼ⓍŤ  ♖♙</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_81 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_82">
//         <div className="copyable-text">ඏ🐚  ℙ尺𝔢ｖ𝓲єŴ 𝕥Ｅ𝓍t  ♝💚</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_82 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_83">
//         <div className="copyable-text">🔥💔  ⓟⓇєVｉＥＷ t𝐄𝕩𝐭  🎉♜</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_83 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_84">
//         <div className="copyable-text">😈☞  ℙ𝕣乇νｉᵉ𝓦 𝐭𝑒Ｘţ  💲♤</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_84 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_85">
//         <div className="copyable-text">♔☠  𝓹Ｒ€ᐯ丨ᗴŴ Ｔєx𝔱  💚💢</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_85 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_86">
//         <div className="copyable-text">.  🎀  𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉  🎀  .</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_86 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_87">
//         <div className="copyable-text">🐢  🎀  𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉  🎀  🐢</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_87 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//       <div className="copy-container" id="copy_88">
//         <div className="copyable-text">🐞 ⋆ 🐾  🎀  𝒫𝓇𝑒𝓋𝒾𝑒𝓌 𝒯𝑒𝓍𝓉  🎀  🐾 ⋆ 🐞</div>
//         <div className="input-group-append">
//           <span
//             className="input-group-text copybutton"
//             data-clipboard-action="copy"
//             data-clipboard-target="#copy_88 .copyable-text"
//           >
//             Copy
//           </span>
//         </div>
//       </div>
//   </div>
//   <button className="loadmore mt-4">Load More</button>

// <hr />
// <ToastContainer position="top-right" autoClose={800} />
// <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
//     </div>
    
//   );
// };

// export default FontGenerator;