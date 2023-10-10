/**
 * Digital Business Card Web Component
 * @license MIT
 * @author Joe Peterson
 * @link https://joepeterson.work
 * @year 2023
 * @version 2.0.0
 * @description A web component that displays a digital business card.
 */

/**
 * Social Media SVG Icons
 * These SVG icons represent the social media platforms that can be linked in the DigitalBusinessCard.
 * To add a new platform, simply extend this object with a new key-value pair.
 * The key should be the name of the platform, and the value should be the SVG string for that platform's icon. Include a title element in the SVG for accessibility.
 * SVGs can be found at https://simpleicons.org/ - all icons below are from that site.
 *
 * @example
 * {
 *   facebook: '<svg>...</svg>',
 *   twitter: '<svg>...</svg>',
 *   linkedin: '<svg>...</svg>'
 * }
 *
 * @type {Object.<string, string>}
 */
const socialMediaIcons = {
    facebook:
        '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Facebook</title><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>',
    twitter:
        '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>',
    linkedin:
        '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    mastodon:
        '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mastodon</title><path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 0 0 .023-.043v-1.809a.052.052 0 0 0-.02-.041.053.053 0 0 0-.046-.01 20.282 20.282 0 0 1-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 0 1-.319-1.433.053.053 0 0 1 .066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.67 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z"/></svg>',
    github: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>',
    gitlab: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitLab</title><path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/></svg>',
    bitbucket:
        '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Bitbucket</title><path d="M.778 1.213a.768.768 0 00-.768.892l3.263 19.81c.084.5.515.868 1.022.873H19.95a.772.772 0 00.77-.646l3.27-20.03a.768.768 0 00-.768-.891zM14.52 15.53H9.522L8.17 8.466h7.561z"/></svg>',
    stackoverflow:
        '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Stack Overflow</title><path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z"/></svg>',
    youtube:
        '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>',
    instagram:
        '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>',
    pinterest:
        '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Pinterest</title><path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.39 18.592.026 11.985.026L12.017 0z"/></svg>',
    snapchat:
        '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Snapchat</title><path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12 1.033-.301.165-.088.344-.104.464-.104.182 0 .359.029.509.09.45.149.734.479.734.838.015.449-.39.839-1.213 1.168-.089.029-.209.075-.344.119-.45.135-1.139.36-1.333.81-.09.224-.061.524.12.868l.015.015c.06.136 1.526 3.475 4.791 4.014.255.044.435.27.42.509 0 .075-.015.149-.045.225-.24.569-1.273.988-3.146 1.271-.059.091-.12.375-.164.57-.029.179-.074.36-.134.553-.076.271-.27.405-.555.405h-.03c-.135 0-.313-.031-.538-.074-.36-.075-.765-.135-1.273-.135-.3 0-.599.015-.913.074-.6.104-1.123.464-1.723.884-.853.599-1.826 1.288-3.294 1.288-.06 0-.119-.015-.18-.015h-.149c-1.468 0-2.427-.675-3.279-1.288-.599-.42-1.107-.779-1.707-.884-.314-.045-.629-.074-.928-.074-.54 0-.958.089-1.272.149-.211.043-.391.074-.54.074-.374 0-.523-.224-.583-.42-.061-.192-.09-.389-.135-.567-.046-.181-.105-.494-.166-.57-1.918-.222-2.95-.642-3.189-1.226-.031-.063-.052-.15-.055-.225-.015-.243.165-.465.42-.509 3.264-.54 4.73-3.879 4.791-4.02l.016-.029c.18-.345.224-.645.119-.869-.195-.434-.884-.658-1.332-.809-.121-.029-.24-.074-.346-.119-1.107-.435-1.257-.93-1.197-1.273.09-.479.674-.793 1.168-.793.146 0 .27.029.383.074.42.194.789.3 1.104.3.234 0 .384-.06.465-.105l-.046-.569c-.098-1.626-.225-3.651.307-4.837C7.392 1.077 10.739.807 11.727.807l.419-.015h.06z"/></svg>',
    reddit: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Reddit</title><path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/></svg>',
    tumblr: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Tumblr</title><path d="M14.563 24c-5.093 0-7.031-3.756-7.031-6.411V9.747H5.116V6.648c3.63-1.313 4.512-4.596 4.71-6.469C9.84.051 9.941 0 9.999 0h3.517v6.114h4.801v3.633h-4.82v7.47c.016 1.001.375 2.371 2.207 2.371h.09c.631-.02 1.486-.205 1.936-.419l1.156 3.425c-.436.636-2.4 1.374-4.156 1.404h-.178l.011.002z"/></svg>',
    twitch: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitch</title><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/></svg>',
    discord:
        '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"/></svg>',
    whatsapp:
        '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WhatsApp</title><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>',
    telegram:
        '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Telegram</title><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>',
    signal: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Signal</title><path d="m9.12.35.27 1.09a10.845 10.845 0 0 0-3.015 1.248l-.578-.964A11.955 11.955 0 0 1 9.12.35zm5.76 0-.27 1.09a10.845 10.845 0 0 1 3.015 1.248l.581-.964A11.955 11.955 0 0 0 14.88.35zM1.725 5.797A11.955 11.955 0 0 0 .351 9.119l1.09.27A10.845 10.845 0 0 1 2.69 6.374zm-.6 6.202a10.856 10.856 0 0 1 .122-1.63l-1.112-.168a12.043 12.043 0 0 0 0 3.596l1.112-.169A10.856 10.856 0 0 1 1.125 12zm17.078 10.275-.578-.964a10.845 10.845 0 0 1-3.011 1.247l.27 1.091a11.955 11.955 0 0 0 3.319-1.374zM22.875 12a10.856 10.856 0 0 1-.122 1.63l1.112.168a12.043 12.043 0 0 0 0-3.596l-1.112.169a10.856 10.856 0 0 1 .122 1.63zm.774 2.88-1.09-.27a10.845 10.845 0 0 1-1.248 3.015l.964.581a11.955 11.955 0 0 0 1.374-3.326zm-10.02 7.875a10.952 10.952 0 0 1-3.258 0l-.17 1.112a12.043 12.043 0 0 0 3.597 0zm7.125-4.303a10.914 10.914 0 0 1-2.304 2.302l.668.906a12.019 12.019 0 0 0 2.542-2.535zM18.45 3.245a10.914 10.914 0 0 1 2.304 2.304l.906-.675a12.019 12.019 0 0 0-2.535-2.535zM3.246 5.549A10.914 10.914 0 0 1 5.55 3.245l-.675-.906A12.019 12.019 0 0 0 2.34 4.874zm19.029.248-.964.577a10.845 10.845 0 0 1 1.247 3.011l1.091-.27a11.955 11.955 0 0 0-1.374-3.318zM10.371 1.246a10.952 10.952 0 0 1 3.258 0L13.8.134a12.043 12.043 0 0 0-3.597 0zM3.823 21.957 1.5 22.5l.542-2.323-1.095-.257-.542 2.323a1.125 1.125 0 0 0 1.352 1.352l2.321-.532zm-2.642-3.041 1.095.255.375-1.61a10.828 10.828 0 0 1-1.21-2.952l-1.09.27a11.91 11.91 0 0 0 1.106 2.852zm5.25 2.437-1.61.375.255 1.095 1.185-.275a11.91 11.91 0 0 0 2.851 1.106l.27-1.091a10.828 10.828 0 0 1-2.943-1.217zM12 2.25a9.75 9.75 0 0 0-8.25 14.938l-.938 4 4-.938A9.75 9.75 0 1 0 12 2.25z"/></svg>',
    // Add more as needed
};

/**
 * Define the template for the Digital Business Card
 */
const template = document.createElement("template");
template.innerHTML = `
  <style id="dynamic-styles">
  /* CSS Reset */
    /* Inserting this collapsed row between two flex items will make 
    * the flex item that comes after it break to a new row */
    .break {
      flex-basis: 100%;
      height: 0;
    }
    :host, :host * {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
    }
    :host {
      display: inline-block;
      margin: 14px;
      font-size: var(--general-font-size, 16px);
    }
    .card {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      font-family: var(--font-family, 'Arial, sans-serif');
      border: 1px solid var(--border-color, #ccc);
      padding: 16px;
      width: 400px;
      min-height: 200px;
      background-color: var(--background-color, #fff);
      color: var(--text-color, #000);
      line-height: var(--line-height, 1em);
      font-size: var(--general-font-size, 16px);
    }
    .text-container {
      display: flex;
      flex-direction: column;
      flex-grow: 2;
    }
    .name-container {
      display: flex;
      align-items: center;
    }
    .image {
      height: 28px;
      width: 28px;
      object-fit: contain;
      margin-right: 10px;
      padding: 0px;
      box-sizing: border-box;
      mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100" height="100" rx="50" ry="50"/></svg>');
      mask-composite: exclude;
    }
    .image.square {
      mask-image: url('data:image/svg+xml;utf8,<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="100" height="100"/></svg>');
    }
    .name {
      font-size: var(--name-font-size, 24px);
      font-weight: 700;
      flex-grow: 1;
    }
    .email, .phone, .website, .address {
      margin-top: 8px;
      font-weight: 400;
    }
    .email a, .phone a, .website a, .address a {
      color: inherit;
      text-decoration: none;
    }
    .email a:hover, .phone a:hover, .website a:hover, .address a:hover {
      cursor: pointer;
    }
    .qr-container {
      margin-left: 16px;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      flex-grow: 1;
    }
    .qr-label {
      font-family: monospace;
      font-size: 5pt;
      text-align: center;
      margin-top: 4px;
      margin-left: auto;
      margin-right: auto;
    }
    .social-media-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      margin-top: 16px;
    }
    .social-media-container a {
      margin: 10px 4px;
      width: 24px;
      height: 24px;
    }
    .social-media-container svg {
      width: 100%;
      height: 100%;
      fill: var(--text-color, #000);
    }
  </style>
  <div class="card">
    <div class="text-container">
      <div class="name-container">
        <img class="image" style="display: none;" />
        <div class="name"></div>
      </div>
      <div class="phone"></div>
      <div class="email"></div>
      <div class="address"></div>
      <div class="website"></div>
    </div>
    <div class="qr-container"></div>
  </div>
`;

/**
 * DigitalBusinessCard Class
 * @extends HTMLElement
 */
class DigitalBusinessCard extends HTMLElement {
    baseStyles = {
        light: {
            "--background-color": "#fff",
            "--text-color": "#000",
            "--border-color": "#ccc",
        },
        dark: {
            "--background-color": "#333",
            "--text-color": "#fff",
            "--border-color": "#444",
        },
    };

    fontVariants = {
        sans: {
            "--font-family": "'Carrois Gothic', sans-serif",
            "--general-font-size": "16px",
            "--line-height": "1.25em",
        },
        serif: {
            "--font-family": "'Playfair Display', serif",
            "--general-font-size": "16px",
            "--line-height": "1.3em",
        },
        script: {
            "--font-family": "'Nanum Pen Script', cursive",
            "--general-font-size": "24px",
            "--line-height": "0.9em",
        },
        display: {
            "--font-family": "'Playfair Display SC', sans-serif",
            "--general-font-size": "16px",
            "--line-height": "1.25em",
        },
    };

    /**
     * Constructor for DigitalBusinessCard
     */
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        // Load initial font based on the current attribute
        this.loadFont(this.getAttribute("fontVariant") || "sans");

        // Dynamically load the QR code library
        const qrScript = document.createElement("script");
        qrScript.src = "https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js";
        qrScript.integrity =
            "sha512-CNgIRecGo7nphbeZ04Sc13ka07paqdeTu0WR1IM4kNcpmBAUSHSQX0FslNhTDadL4O5SAGapGt4FodqL8My0mA==";
        qrScript.crossOrigin = "anonymous";
        qrScript.referrerPolicy = "no-referrer";
        qrScript.onload = () => {
            this.qrCodeReady = true;
            this.updateCard();
        };
        document.head.appendChild(qrScript);

        this.resizeHandler = this.adjustSocialMediaLayout.bind(this);
    }

    /**
     * Load the Google Font dynamically based on the font variant
     * @param {string} fontVariant - The font variant to load
     */
    loadFont(fontVariant) {
        const fontFamilies = {
            sans: "Carrois+Gothic",
            serif: "Playfair+Display",
            script: "Nanum+Pen+Script",
            display: "Playfair+Display+SC",
        };

        const fontFamily = fontFamilies[fontVariant];
        if (fontFamily && !document.getElementById(`digital-business-card-font-${fontFamily}`)) {
            const link = document.createElement("link");
            link.id = `digital-business-card-font-${fontFamily}`;
            link.rel = "stylesheet";
            link.href = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap`;
            document.head.appendChild(link);
        }
    }

    /**
     * List of observed attributes
     * @return {Array} attributes to observe
     */
    static get observedAttributes() {
        return [
            "name",
            "email",
            "phone",
            "website",
            "address",
            "theme",
            "fontVariant",
            "imageSrc",
            "imageShape",
            "fontSize",
            "socialMedia",
        ];
    }

    /**
     * Lifecycle method called when the element is connected to the DOM
     */
    connectedCallback() {
        this.updateCard();
        window.addEventListener("resize", this.resizeHandler);
    }

    /**
     * Lifecycle method called when the element is disconnected from the DOM
     * @description Removes the window resize event listener
     */
    disconnectedCallback() {
        window.removeEventListener("resize", this.resizeHandler);
    }

    /**
     * Lifecycle method called when an attribute is changed
     * @param {string} name - Name of the attribute
     * @param {string} oldValue - Old value of the attribute
     * @param {string} newValue - New value of the attribute
     */
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            if (name === "socialMedia") {
                try {
                    JSON.parse(newValue); // Validate the new value is a valid JSON string
                } catch (e) {
                    console.error("Invalid JSON format for socialMedia attribute:", e);
                    return;
                }
            }
            this.updateCard();
        }
    }

    /**
     * Update the card based on the attributes
     */
    updateCard() {
        // Handle image
        const imageSrc = this.getAttribute("imageSrc");
        const imageShape = this.getAttribute("imageShape");
        const imageElement = this.shadowRoot.querySelector(".image");

        if (imageSrc) {
            imageElement.src = imageSrc;
            imageElement.style.display = "block";
        } else {
            imageElement.style.display = "none";
        }

        if (imageShape === "circle") {
            imageElement.classList.add("circle");
        } else {
            imageElement.classList.remove("square");
        }
        const attributes = ["name", "email", "phone", "website", "address"];
        attributes.forEach((attr) => {
            const value = this.getAttribute(attr);
            let element = this.shadowRoot.querySelector(`.${attr}`);

            if (value) {
                element.style.display = "block"; // Show the element

                switch (attr) {
                    case "email":
                        element.innerHTML = `<a href="mailto:${value}" target="_blank" rel="noopener">${value}</a>`;
                        break;
                    case "phone":
                        element.innerHTML = `<a href="tel:${value}">${value}</a>`;
                        break;
                    case "website":
                        element.innerHTML = `<a href="${value}" target="_blank" rel="noopener">${value}</a>`;
                        break;
                    case "address":
                        const encodedAddress = encodeURIComponent(value);
                        element.innerHTML = `<a href="https://www.google.com/maps/search/?api=1&query=${encodedAddress}" target="_blank" rel="noopener">${value}</a>`;
                        break;
                    default:
                        element.textContent = value;
                        break;
                }
            } else {
                element.style.display = "none"; // Hide the element
            }
        });

        // Handle social media links
        const socialMediaAttr = this.getAttribute("socialMedia");
        if (socialMediaAttr) {
            let socialMediaContainer = this.shadowRoot.querySelector(".social-media-container");

            // Create or reuse the social media container
            if (!socialMediaContainer) {
                socialMediaContainer = document.createElement("div");
                socialMediaContainer.classList.add("social-media-container");
                socialMediaContainer.style.marginTop = "16px";
                this.shadowRoot.querySelector(".card").appendChild(socialMediaContainer);
            } else {
                socialMediaContainer.innerHTML = ""; // Clear existing icons
            }

            const socialMediaLinks = JSON.parse(socialMediaAttr);
            socialMediaLinks.forEach((linkObj) => {
                const platform = linkObj.platform;
                const url = linkObj.url;
                const icon = socialMediaIcons[platform]; // Assuming socialMediaIcons is defined elsewhere

                if (icon) {
                    const anchor = document.createElement("a");
                    anchor.href = url;
                    anchor.target = "_blank";
                    anchor.rel = "noopener";
                    anchor.innerHTML = icon;
                    socialMediaContainer.appendChild(anchor);
                }
            });
            this.adjustSocialMediaLayout();
        }

        const theme = this.getAttribute("theme") || "light";
        const fontVariant = this.getAttribute("fontVariant") || "sans";
        this.applyTheme(theme, fontVariant);

        if (this.qrCodeReady) {
            this.generateQRCode();
        }
    }

    /**
     * Adjusts the layout of social media icons in the container.
     * @description Dynamically calculates the number of icons that can fit in a single row
     * and adjusts the layout to have an equal number of icons in each row, if needed.
     */
    adjustSocialMediaLayout() {
        const container = this.shadowRoot.querySelector(".social-media-container");
        const icons = Array.from(container.querySelectorAll("a"));
        if (icons.length > 11) {
            const containerWidth = container.offsetWidth;
            const iconWidth = icons[0].offsetWidth + 8; // Include margin

            let iconsPerRow = Math.floor(containerWidth / iconWidth);
            if (icons.length > iconsPerRow) {
                iconsPerRow = Math.ceil(icons.length / Math.ceil(icons.length / iconsPerRow));
                const spaceBetweenIcons = (containerWidth - iconsPerRow * iconWidth) / (iconsPerRow - 1);
                icons.forEach((icon, index) => {
                    icon.style.marginRight = `${spaceBetweenIcons}px`;
                });
            }
        }
    }

    /**
     * Apply the theme to the card
     * @param {string} theme - Theme name
     * @param {string} fontVariant - Font variant name
     */
    applyTheme(theme, fontVariant) {
        const generalFontSize = this.getAttribute("fontSize") || "16px";
        this.shadowRoot.querySelector(".card").style.setProperty("--general-font-size", generalFontSize);

        const finalStyles = { ...this.baseStyles[theme], ...this.fontVariants[fontVariant] };

        Object.keys(finalStyles).forEach((cssVar) => {
            this.shadowRoot.querySelector(".card").style.setProperty(cssVar, finalStyles[cssVar]);
        });
    }

    /**
     * Generate QR Code for the contact card
     */
    generateQRCode() {
        // Clear existing QR code if any
        const qrContainer = this.shadowRoot.querySelector(".qr-container");
        qrContainer.innerHTML = "";

        const name = this.getAttribute("name") || "N/A";
        const email = this.getAttribute("email") || "N/A";
        let phone = this.getAttribute("phone") || "N/A";

        // Normalize the phone number by removing non-numeric characters
        phone = phone.replace(/\D/g, "");

        // Generate vCard data
        const vCardData = [
            "BEGIN:VCARD",
            "VERSION:3.0",
            `FN:${name}`,
            `TEL:${phone}`,
            `EMAIL:${email}`,
            "END:VCARD",
        ].join("\n");

        // Create a button to hold the QR code
        const qrButton = document.createElement("button");
        qrButton.setAttribute("aria-label", "Download contact information");
        qrContainer.appendChild(qrButton);

        // Generate the QR code
        new QRCode(qrButton, {
            text: vCardData,
            width: 120,
            height: 120,
            colorDark: this.shadowRoot.querySelector(".card").style.getPropertyValue("--text-color"),
            colorLight: this.shadowRoot.querySelector(".card").style.getPropertyValue("--background-color"),
        });

        // Add click and keyboard events to the QR code button to trigger the download
        qrButton.addEventListener("click", downloadVCard);
        qrButton.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                downloadVCard();
            }
        });

        // Function to handle vCard download
        function downloadVCard() {
            // Create a Blob from the vCard data
            const vCardBlob = new Blob([vCardData], { type: "text/vcard" });

            // Create an anchor element with a download attribute
            const downloadLink = document.createElement("a");
            downloadLink.href = URL.createObjectURL(vCardBlob);
            downloadLink.download = `${name}.vcf`;
            document.body.appendChild(downloadLink);

            // Trigger the download and remove the anchor element
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }

        // Create and append a label under the QR code
        const qrLabel = document.createElement("span");
        qrLabel.textContent = "Click or scan to save contact";
        qrLabel.classList.add("qr-label");
        qrContainer.appendChild(qrLabel);
    }
}

// Register the custom element
customElements.define("digital-business-card", DigitalBusinessCard);
