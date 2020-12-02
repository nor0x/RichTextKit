namespace Topten.RichTextKit
{
    enum WordBoundaryClass
    {
        /// <summary>
        /// Character is an letter or number
        /// </summary>
        AlphaDigit = 0,

        /// <summary>
        /// Character should be ignored when locating word boundaries
        /// </summary>
        Ignore = 1,

        /// <summary>
        /// Character is a spacing character
        /// </summary>
        Space = 2,

        /// <summary>
        /// Character is a punctuation character
        /// </summary>
        Punctuation = 3,
    }
}