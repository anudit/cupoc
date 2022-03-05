import React from 'react'
import { Button, chakra, Flex, Heading, Image, Text, Wrap, WrapItem } from '@chakra-ui/react'
import Head from 'next/head'

function Tile({background, logo, title, description, link}){

  return (
    <WrapItem
      display="flex"
      maxWidth={{base:"100%",md: "400px" }}
      width={{base:"100%",md: "400px" }}
      height="180px"
      py= "20px"
      px= "20px"
      flexDirection="row"
      alignItems= "center"
      borderRadius="10px"
      onClick={()=>{window.open(  link, '_blank')}}
      mx="10px"
      background={background}
      cursor="url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHg9IjAiIHk9IjAiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im01MTIgMjEuODA1djMzMS4yMDJjMCAxMi4wNDItOS43NjMgMjEuODA1LTIxLjgwNSAyMS44MDVzLTIxLjgwNS05Ljc2My0yMS44MDUtMjEuODA1di0yNzguNTU2bC00MzEuMTY1IDQzMS4xNjRjLTQuMjU5IDQuMjU3LTkuODM4IDYuMzg2LTE1LjQxOSA2LjM4NnMtMTEuMTYtMi4xMjktMTUuNDE5LTYuMzg2Yy04LjUxNi04LjUxNi04LjUxNi0yMi4zMjMgMC0zMC44MzlsNDMxLjE2Ni00MzEuMTY2aC0yNzguNTZjLTEyLjA0MiAwLTIxLjgwNS05Ljc2My0yMS44MDUtMjEuODA1czkuNzYzLTIxLjgwNSAyMS44MDUtMjEuODA1aDMzMS4yMDJjMTIuMDQyLS4wMDEgMjEuODA1IDkuNzYzIDIxLjgwNSAyMS44MDV6IiBmaWxsPSIjZmZmIj48L3BhdGg+PC9zdmc+DQo='), pointer"
      _hover={{
        transform: "scale(1.01)",
        boxShadow: "0px 0px 20px 1px #454545c4"
      }}
    >
      <Flex flexDirection="column" alignItems="center" minWidth="100px">
        {logo}
      </Flex>
      <Flex flexDirection="column">
        <Text fontSize="2xl" fontWeight={900} color="whiteAlpha.800">
          {title}
        </Text>
        {description}
      </Flex>
    </WrapItem>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Cupoc, Inc.</title>
        <meta name="description" content="Cupoc, Inc." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Flex flexDirection="column" width="100%" height="100vh" alignItems="center" padding={{base:"20px",md:"100px"}}>
        <Flex width={{base:"90%", md:"800px"}}  flexDirection="row" justifyContent="space-between" >
          <Flex flexDirection="column" justifyContent="center">
            <Heading size="md" fontWeight={800} color="black">CUPOC, Inc.</Heading>
          </Flex>
          <Flex flexDirection="column" justifyContent="center">
            <Button colorScheme="messenger"  borderRadius="100px" px="20px" py="10px"
            as="a" target="_blank" href="https://anudit.notion.site/Careers-CUPOC-Inc-3c238e5e90c94d8b8161c132e955438d">
              Join Us
            </Button>
          </Flex>
        </Flex>
        <Flex width={{base:"90%", md:"800px"}} mt={32} flexDirection="row" justifyContent="center" >
          <Heading letterSpacing="-1px" as="h2" size='lg' fontWeight="500" color="blackAlpha.800">
            Driven by <chakra.b color="blackAlpha.900" >Cu</chakra.b>riosity, <chakra.b color="blackAlpha.900" >Po</chakra.b>ssibility & <chakra.b color="blackAlpha.900" >C</chakra.b>reativity to re-invent the internet, one block at a time.
          </Heading>
        </Flex>
        <Flex height="100%" direction="column" justifyContent="center">
          <Flex flexDirection="row" justifyContent="center">
            <Wrap maxWidth="1100px"  justify='center'>

                <Tile
                  link="https://theconvo.space/"
                  logo={<Image alt="Convo Logo" p={4} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAACWCAMAAADXJvXnAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAH4UExURUdwTFxAR2RIVWFESXtshV5CSVtARnpqg1o+RYZ+nmdITmVKWHxXW3FPVId/oLWarcCjsZKDn66Vqrqers6xts+3so6DoqKNpWpKUWRHTMamsomCoc2ttoVeX3hUWHxth6eRqI6Bn8+zrKqSqGNHU5VqasqqtM+1tol/nZ5wbs+1uJFnZ52Lpc+5tZWGoc6spMKksc2srIuAn21NUpmHoZ2KonVSVs6xsYFaXc2tsqaPp6N1c6t7eM+xpoxjZM+pnrGXqs2jm4lgYXRTW5qJpGlPW3taY7KYrLmHgKqRo5ptbM+5uGFGTayAf5Z/k29QV5KFoqOLoIhoc5aIpIZ8mqJ4eY1/m8yck6d3dcylo8eos4d3kKCAi4Z5loJha86gl2NIT3tmeb6hsF9ETJV4h3RXYrWHhL2Pi3BYaWxUYoJeY4tmaoVgZcWTi8KQiLF/ebSCfJdvc31fa412jHVgcrOJisyYjot7lIRyiryKhMmWjpxyc5qFm7SPlcGNhb+dpI1xgGxNVMqmqqSHlY5obZJudq2PnLydqraZpohse515gZF/mMWhpbKVpIZugcyrscSjrKmDh8CfqIRlcsaZlbSSnZ6Incmfm7ySk8KWk8SbnJp1fL6ZnZRzfZyCk62DhK2Kk7uVmpB3iayIj7mXoaR9gn5rgriPkuYanVcAAAABdFJOUwBA5thmAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAZGUlEQVR42uzb70tiaRsH8EEWhhAsrQw0SC1GCcdSlEgIfKFPSCA5RZDWQNLAzNt1HuyFg1FQtma5DTUPMRMzbezf+Vy/7nPuYw2rZ+aFzXat0w/3Rfvpe90/z86zZ0/1VE/1VE/1VL9q7f2LqOVyeVur9XX4AO+V935NrCDvF75f/qW0iGXbEJT6rAq/Q/Uvo63VtrdrG5H19QjW0FBk6KGiqH8Bbg1qAyui1dDD6sdu3qN0wbpu0Zro7yS9/WhnqTJroRLBjQRWBP/8k/lxkvfK3MlQQbNE/Q8hP0JylblBHRt0a+4eGvsxLVTVWq2FXiC6tdKjjkRYPfT9mLf3HhG31XJ/r7TulpBdru+RH8m624J43UocM+oeWsyubrGL6rGIqzVONybUJFUs1g1XZOjtiPisYCYPPLcq3QxQseolYkab83bCIna5Ho+4Wiu0qI3Zl9Kqm61iTphkVzfYFRnwtuZ2Zi4po9FUlL/Q2SbY67aG7LJw+ZcwwOKqES9jJ+ClKhpFfDQbTSWJzehVDNkbNDPuLpzF19cHdEmutgruej2mwp14oKJFjFrISc6ZUg4+RPb7/WQeWh/IFRnbuV5nbrEIunRXTaRBDC9s8GQqmeWYqbO9SPZ3k/1UQN55nxs8b6FVRy9oOUxRBrrV3N3RVBYqubamBrNXOtuKpZp6n8s5B7Gf6/X6FYSrrAGs6Wl4YdF3AY45zeYokjHl1VWesL3eREJC1cDv3zmduQGcrgocbxE4ECsr8/jB45lWZtAHJOYJFq9lsyz2Yvm9CdXGhvdtzpnLDRj4jL0YbxE4+QAxu2vaI+y0YU5hyGvJ5CqQV71cfku5IF7nwDV0tVAAL3KL2Mk6N0NlfJsHdyCd1lJOpWgor64qsl9Du4ZyzgEEVwHM8UIzcxMDlK3Dy8uZDLzgj4fdlpRhqcbZa21NJxtiV9lJ9WwQG/oKRm8xn86rWJczy4BdHuair5dJ7pk2OptDTmWj0NZA1vqa0Ou/5She56B5qzR+i8CFWYq1hnR0WC9EW1Lm3UhWQl7Txf7t986BDJgb+gq8+ek8pSvY0VF4qTLkQvYYjU0jOSvm2KpXyIny28H07pO3KF7hGs5KRTObZBVzwNyJSMgxyThRVvnaBBvPsco/dyN+dksDGL158ppcwFZUqZhHlRjNWl+b5BjNXYmptz/g3UPquuWu6KeduKq7BfFSvsPKW7lfZtA0gWU8OtkQx3BN3vgB7x49sXvghuynmPdvlVfnkm+Eah5qZKQywmRRm31tma7V3BXb+Pud0x4Yn1E+oHXxReH6TwkYJyzs53amyV7BItXnm5fCd4ykh0fNGZt22Vax264XW1ldeHddhOLuHI5d6z9nxhJvc/j4mLmi9KmymtUEpsTa3IVku17g1oaEe+/ZhhzBfpR8u3uD3mK+jd6mxgVlqeTjj/B5XtRENuZso68DabOtWzu2vDv8bAcOmMGEcW0kN6JKTLu3yA+M5f3dwg0PYPQeHx8Ll5xQL1SxGs0j8ypl2Yh0T11ue949fk5JD3Tc1kdZrgSRTbH9+5NbAB8WzX4Gr8El5wutStLcI0bKDwzkaHIn57QBpniD1gc7q3wpev9awTVUtj1F3xziCG63sZ/BWyGvRDsJJZ8mhVzC3h4xyLzJ5l0I3w6ktPHbn7dFWrr9x0sF8/aIcnbxCZvBCbttjSP4kLxt7OdjzNfC1UpilhlspKKHnJHNdTqd2sk5bHqN6+FsMkWXxHIf7OZ7UX9Ccf1+rz9hS0wBHx4dUcDk7aAXXYuLk4uTY/fMJWlsUyy7EBFPQD877HhbrSBp+XJ4gi6I4aSdhKO23IxqFwvwpcuWuEoj+OioTeCLi06nQ95FSXeMi77QYy7xSL4/dQUw3/7B6HXT5TBfg9O9mWzeUtm17BrfIAVR6mUxZLzRt/gMOvoGvEfivUCvj+M1tOExg22QS0CGtq7oszUN49+dDhsNDf3sduN1WpSvSmFo4OVZwDyIWc6d5PX6I4mNso016ZDANGF1EFw6f3Fucg3t2KTVjH09b5m6UPzGgdWv9wzGL3KLiA3gtaEHX8amVW6R0KxfLvgT/YpPbgV8edds4AjGgIGL+ap4Z8NSesy0LJd85iaEN5qZdw6p/rzVWiuWxNsW0PItGl0vyZlbmVlsuUKCpu5nPf54JuDLdrtxxw1dOkfvImcbntUrrIJG8OQL2oRJV3PGmZzDDvgE97bgzafx+OJRNy3LyzIxeExy940KbMP6Gcav9mEIHxK4edfAKevU5xPw5BimOjv7ANkI2ZyraRhncLoSr6Ovhm7V66limu7S+KpFu16hbQ2tdxNy+CSxoIORWh9NfUJDGBaly/YdJAwz9MHBAYKpl9HbJVZD2uhq2IMYXZ03+hnBffxXYMB4m5b3mDctFf2KReZ/JY7FDHEwsRHZnrIBvrtrNLClDw7ilDB772UcHuOhLDNXSbp6BMHtjw4N3M+4qtJhDe8e5GQ6wufwir7Os3hCm7DlGmmj94hfwRDeugEvgcmLHX2+sLiwsMDacHhldmXlgYFsZizDuH3isAeGgN10eMG7h1He2ULfzPu0c5kKOT1hIVPGAJ7qGbx7q8AYMHZ0PA4BLyhwOPxyBWt2VtDGdA3eRXMDUqk0d3Wvo6+Js1DnfoZ48aDGx1FsHxwv82qd55HcLQ7CIO55ooaO3iLwJSV8egpiBSas8gpaB4/hzCbDGMTDdr08gnEvn8F452VfW8JlQK31Sgwhw+lEiXmBCgY3eo/4ZB8C3jr8+uGSEj49PeCEFzjhl1grmjisr8iLLGZwc3fGphcDvsHDaQZOpiN8bFH79rFJVJc4ZiTTCiUDmUKmlo5s9/i3Dz6e7ELChwwG8Sl1dDzO4PHx8W6xdQdC4nOatpr7MzP2vM8+wukFD6eZ5jHli1xe7WmvR1Mj7ehGkZwR8UQUt9drdFjGhPee9zSEqaUP//qKLd04bVDCBwIOK7Ahxq8N8MIi1znMcr47y3zVH/jVPk3ReDS9gIChk+GEhmtBmFbASdrklKivZffKGfNl8CqCawD+rTfwLk7Sf0lLA3iTEo5bElZk+RrB+K/Few6bj7tX9r2vT/bxggnAzYsL2NXyFs9c9tGM44aXPhrHagsCe+sYgN2YcG+DmMBbWwD+gOBTGcMMHh/XxFqNY8JKDEuYz9f44rTtlSGMZ5fji47vBYHDXYsgLfi4Qo0aYnwMn+X/tWSDEj7b6ambVMJH3z5/poQ3SRxS4C4xfo/vUsQLAu5svZnRR3B/pzUcwgC+bDbAW2Ivgle0zR11NYxjmqzxSW1AxEnyEnhqp+eEDynhz5+vTXB8IRQKPSDmt8YXFgxw/Ny3BQdCDdyf93cEw16+jeAO7vFwPZyVVWGF1kGcHich4g5P1SQmcBLBrVbPCX/UWxojRvDmHIINL5PZbbyjvDTet97YH8AAPkEwzJp3uM2j+RJXf3NZwKVwjFYDn49HcabtyeO1QPFq7apOCeNfipt63jv4TwB/APA1gUkcohp/uFTA5+ydmbHvxTlrl8GN0wvoLtjUhvWFAfVhni18850OnNiHm2185FcsFlNXdR7CCD57/r4H8P6X3T+2/sSEvyG4cf1pc25zbm5OwKEHtSpgyveP3MzMjO2GZjCMKhhSuCjSfAntNI7kl/jPS1oSePnzdSoAbrYzbXwoVLxKXSVjrVYLGhoC/ntnp1cwib+B+PoTJwxgJbaQQ+P4Dvz80EIoHte9Mza5AH51cotbvW/fYM7kPUBInznCsCjwZOE78HUuwNvMtNvkvbqK1eutQq1a3iNwLwnDrxcS5ogh4evG5qaQl1RXh8QqXCqYxdn73zeOH8oXwZww/Hza9+CvWmaO8ZfSUvTTDjoHnVMAN9rNS/QWi1f1eqFQaFUBvDc1ddJTwidfvkjC/0Pxp+vTTwxeWppbCi0tccbk1ioeitPMFm+8dlgaun/vf17T0rj19QNNmgfQXEss1pYE/FGwQfg/63b7k8a2hQGcFi0Nhe/6AUxu5APhA2lMDImKQSLpJcwhx4RgEwMSBQR8A0tT5NrqUZqr6TXxihdQOWo92n/zPmvtPQPW0jMjXeBLwTj85ll7z960/fKFA/73f87++fnz77/v/4/FwnucsuhIODE3BzDEt7flb83mzc35eaMRCIiIYSbwVBd0Sn5+/RqvC+S3iX7zNYVKpzSI96nFMIH8QTPmlOysf6hN9ZoPhmXRfz99+uuvs7MzePcB/vNfHPDWh5GBgVRKD/h0rgbwHSK+3dlpNi/rADcCald7hXhqqsOdIu6UlyYXr/eP0GifA1gDL9xST5+fy+56cJZxPK8XT3z58ukS3htw4d3f//NPNPRv5D2+vyfv34JLKviEwd+aOOL5eSAgMp7GkTnl7wvh4gWg+dKj3eCn/UvZUClBr4GujM1m65z6S+su9XheMbF8OT+/vLk5O9v5fP1Z9X79urV1jLKQVyf4gsAnDMYRz+vU1IG309PT4sDdZq84vlec8Wi3N5dbGegLfHL7rdlChwWmp99KsXY04jYa55eXl8LL+S4AvLz1Ffkepzjfdyt6wHM1gCEul8vfSNwSwxjFYhGzV3K9XlXrfdtIjGrg3MqKZQD1BHAaPT1XOzpicLPJp3tanm06PhW9mgbibd3c7OxcX1/f3u5jtbTw9TdwyXsovH8PpmPJiO8ALmcJXKeM5VFFaU7xCuQJv1O5s+/epQZkPRXcxkso08TZqrfqyWRgWjs8YZONZL3eumk1m1gQqtzl5eXdr1vHuzJfiFd0gNWeFhHTAemIDS1jtQSUzrd6zstC+6pL+zQx9fQcvQblqlzmM16PJ2EOsJW9AXgBJm/5+vZkQXohhjeVEg29smIATKP4Sm1q/PJ4g45I4i60ds7xShpl0cqplGVkZKQvMSJGmxUvYgRGk7Va2/F4PEk3rnictK1mtvmtfF2+PQH4buFoebm9i0I7H8p21gM20cmt1S4oYnG4bJZPMZ/kQFKe4Y50Wp72xgm1ssVC2gfcJ4ETibkDiI+UK34N62vb2/H3cfVef19fa63hleG5q6uTk7u7o+WLNtLdZSzuJRWcM+mbtdokVk6kOMtiOsnJZDKpkQNaj+GkK7OzqZGBkcfcgQGLUXCQxbViNYaMlUwmkwUZ5vdU29vb62vr63hVmQxxFeXu6Ojioo14D1FzqVPEWxLx6kk4pEVMQ+iqrIW8rYkRtHDzh6hse0SrgYHvzUbBwVAeEbuEWICBXNteoztp1z+SN3OVUa7uyNtut2u7h3OHh6fkLZWkNpfTNWEkeABdxO4U2VFUa61tGkjCHE+qUDGmcN/5MDLSbX4QscViEIxRnDhAU8disUkFGb95U6l8RK3jhqpkKuAifTxP8V7UdmtzqNPTErpZjTeX0w8uFjFlHOH0kjgjwNRTcVlJhsc7VY+Xt3qCDYujwXQ+kSgcuKrVCYQM8+bmG7Uq9EnJKApxY7ELvNZajbyniRJVWtPmcrN6wTxHHnHG3FFZHkVyGHU54/yH7e06Rta3hZ5go2KAQ/nVQsGFrp6gkCcVCcaXzc3NDUWZnIzNC67Qgptg8Eoat5z06lnaYr5IHAAMsWjqjCCvZ1ksZg5Siw85j9DYyi70BBsUR1mcKBRoHFdj8/Pzk5OTGxsbm1T4ij/NT8zHqtUqvAcHB/AKbiidXulo9f0fMI6YxBeYMoisaGSeKtdUcgeLByn/9ezyz8AGxSE1Y7fbPTExQWjhZi2q6najm13wFgrg5kPEReXSmlcfmMQ0YdAciQF0R5NGJlOpALz+wExxU7JrPHPShaK32GJMbCdxPr/q93tcKCZzzc/Lb3AainhGcFdLq6WQ4AZBFdjZWX2btXQoRPMFXQaFeFIVf6yoZG7utY51nb2VSiVz8uEnYP3isT00tS3vWJ1hctitkd1qhcPELRQKq6v5fCgkvDnBjbJW778nYXDhoFarfi+mSwNdFujC/1EwiYtvsxW60U8pH3pemoyI9/aQsc3n4JA9ZA67waY7pHR3uTwFjx/ePHtJGwzOCqzIV+9unKYLjlhMGHwlZDIuCALdKXFV/EgPZ0QpVx96X5v0i8fGxqLBoM3myzscMx5CU2tTqlQeKr9/ZhXlC4l4WSs7eZb/09sr3StZEbGLhjEyppkCYGUzI6+DRFSrwiUujpnNDF0dj3Z7z1v6xUMkdjpZ7JhBZ/s5akn1z6AcjnzeYbOF0jZoo7NRzvbV81HB1f8vStK0kiXxgRBj/mcyLv7a1b8ioZWK+gieUkRNHrV/CDYotg6NRe3jToTs87F5xg823fGNgwpP2Gy2oBPaYJS4e0Ojz58vvhqFFu7nBjYruCKsImJcE4o8kOf52s/kzQcLHlWLwtMbCl0zMOzbP8tYJ9lqHR2zQwwyxjKbmal+Ya3NGRwPjkO7RzVE+9NFfn+J9uVGNiuhxCpFTGI3lnciY1wDN0XJSDvaDSwHFPoRhdc/sd2fRKxfjLYGWZqB9nGqPmm1OZ3OoB0XsKidtCBaRxcXO28yGVq6I+KEEIfdVSbTRR8BbvB6Z0OVy5WPWPxgQSC4E7Fq+/gnYH1i6zCRISKy0/agnFTj43a7fWxsb2/MOmRdHB0Cl4q5kVGDmxUMYzQ15sbwg6XOJMk2NiRSK1r/4HnS8hoIVTt+PEs/RSxTHnfKGpdWqUXtDVmti4tW3BYXI0IciYw+NwQOilFcKPDVgC7zVTeT5ydlkbKTLIqenVC1WOIWi8f3AyN99bRpeFgj21nNZaebHY+N4Rlka7UOE9MckYWgI4YCVpuayOo1H10tUxZqDc7fikcn3LwQKtIKF2tc19zhfZ+j2DS8CA7IQ5SlXRSFik94kJ5DrMO4mSNmDRyJLBr0YncGsQ9ghOyhyTrsLvJyjlezuKlyWXLNh5NCvVB0hWsuscy9H+lrFJtMZjOnzOihMe2TxFqHh/EDkYh5ybwUGRzsiCMG32KJ0iKHxX6/CJlTdmtouY6fZ7/kTogFbjhcdEkuVmv3vcD6xWwetn5X9JhZ1iCXedC8tLQELD4bftsQYIhpHK/6PWIkhwV5okvtfrScd8ul34GHVvVY5yZSvcBGxDAL9nC3E0IpfSbIS0uDuAFt/J1wijhtwzCmtbtY0TGZF/A/rDCXXOgeSC5VqddMbTIkflCDgvqsqwYHO+in/H0WN7XNBrFYxwqyQIfDWn+HVWlYruvFWpe0fubiF5Tu+xvGJkpS9K2ZlQiUiC+6ix4V6Kfk2xH7fHnak850Yu6Yu8rl6trEENavcWnnVupvGJvMg1qp0Jcv6YNLFcuQTaangqWY92e0cpd7FUHrUnaoYh/jl9s25vLOPFSy/HAU698dm9UGFtiHJb0MXjI9ufai4xjG6l7F8YjseSgVWA9t21SrDztVbN54b576IdiIuKf3ZVfApj4Ka9ggj+Ou7ZnsbL/nUclkxS7VwVqfXPbit6SD6Xd9ik2DWjP3CPjZYMTUV3FTB+VGxSFTFhtxv0ZUa0atztYtpHm5tJAtTxSD/OJxxC+0hjb1XXv2qD0o9ymyrx0aTINKLfbkM3KnmtfCxW6VtudB2p5H0ylLXxHLmMn8kiat7vnqV3DpfTQ7b8Cdnb6W6k6gj5J1qL3sVMOlDStXbiXVz8T1Xc4vfrFWvJFmF/tvsRnlrbejU2qiWnXGLWWLaMehtfMWXbwjkXtn6V+sJi0mZtMvLRKLtpb7b58ox+PyCe3/2zWbnIaBGIw6QBOUwr5sssoNIkVcoLs5RKrZlD0X6M0Ze/7saVoKCMmp8qkgUNi8fk5Sv5BUBE7y6FkJltab0z6W/Ffif4rbTaiisWPKwTsWmXQsuIjO7+exWcdLC07fT0cquWm0Eg8nRI7CISuWAjSMcaLFDR3fKZJNcZ/rW9IRx0OjFxjtcNQN0bFIyPfsmF5ytaPf1XGS06betl45Te5MbprmSSdxFiyInKm70OdLF2vt6OgYUIOZoGpPE7brnRNqJ2M+D43ajol4IIWELmlkOq1jP9G7wbol2KGolmAp9qAWuCeLhjVLk+bRCTO6NU+Kr0F4GF8tmphAa1BM6K04CqWs0QL2q7848bg/2QXaKGImlBTGkHmy5F8oxkxar1ttRN5x5PMMqdcA23Ip4xhRtfmgmDCm3+oE9sQemXp2YINvM7Q+JNZ0QW6lf3K05KAeNzboGSp7u//UCAxJFUaqHU7ubkjOlJMmWqGgmLQgYEtf1j7s6SYFoJSYoHFkw+xKVLSp9OJikaNumGoL3zZ2/3EEdSnNMCGfdUq9ymovxfJfAHQS+/Lads6JyxlmrFmiCpuqnTchz+dMGxfSmNb2iF5iA+glfkx4s6DsjK0qqY6rtK1XRdOgN5nvbeZZAFJ6Tc5Qk4apLwGD6jjSN45cNspMKnNtnLtAtqA8s4942PxWcx6VPyCoGXC1gQVk5p7DT9bnyzmvGGBJxHmUM+o13ueS18JSIu8831c7O9OwqLB6qxtxJTAsLb5jOc834daLxI3EvwSGhUaexHePy594XAfmT71g+bmOLD9Xwp3k0sVa/tcJ3FnyR61aktbuENxpqGm2E8KaNWvWrFnzs3wBZFJH5/SILYMAAAAASUVORK5CYI" />}
                  background="linear-gradient(28deg, rgba(9,8,18,1) 0%, rgba(26,36,51,1) 31%, rgba(37,39,55,1) 51%)"
                  title="Convo Space"
                  description={
                    <Text fontWeight={400} color="whiteAlpha.700" lineHeight="22px" fontSize="sm">
                      Tools and Infrastructure for adding a Decentralized Social Layer to any application.
                    </Text>
                  }
                />
                <Tile
                  link="http://omnid.space/"
                  logo={<svg xmlns="http://www.w3.org/2000/svg" width="64px" height="64px" viewBox="0 0 512 512" xmlSpace="preserve" fill="#DBDBDB">
                    <path d="M262.2 498.2C92.8 486 91.4 43.9 253.1 13.8c169.6 9.7 169.1 460.3 9.1 484.4zM338.9 256c4.3-52.2-28.1-295.4-114.3-206.1-64.5 109.3-62.9 302.5 0 412.2 87.2 89.6 118.1-154.2 114.3-206.1z"/>
                    <path d="M501.3 314.7v6h-1.5v9c-50.5 112.8-453 116.7-484.4-9 12.2-132.7 460.5-132.8 484.4-6h1.5zM257.6 253c-68.3 1.1-140.6 8.5-203.1 37.6-28.2 22.8-31 31.4 0 54.2 53.6 46.9 451.9 59.3 427.2-37.6-47.5-49.8-157.3-51.9-224.1-54.2z"/>
                  </svg>}
                  background="linear-gradient(154deg, #113e6b 0%, #051655 100%)"
                  title="Omnid"
                  description={
                    <Text fontWeight={400} color="whiteAlpha.700" lineHeight="22px" fontSize="sm">
                      An Omniscient ID that travels through the internet binding together all your experiences.
                    </Text>
                  }
                />
                <Tile
                  link="https://varta.space/"
                  logo={
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      {/* <circle cx="256" cy="256" r="256"/> */}
                      <path fill="#fff" d="m102 156-10 30c24-15 59-59 87-65 39-11 80-14 119 0 32 4 79 43 96 94 27 55 8 120-36 160-106 111-278-41-171-153 43-48 134-36 147 32 3 17 0 33-5 48-6 24-38 37-56 18-23-14-5-49 18-33 12-30-17-45-43-43-34 4-64 47-41 78 23 62 115 49 151 6 28-34 27-85 3-121l-18-22c-19-25-50-32-79-37-83-13-160 60-163 143-1 43 20 84 49 115 73 71 211 59 258-35 18-35 32-76 30-116-4-32-8-65-27-93-51-78-160-101-243-63-34 16-47 23-66 57z"/>
                    </svg>
                  }
                  background="linear-gradient(85deg, #6d6d6d, #4d4d4d)"
                  title="Varta"
                  description={
                    <Text fontWeight={400} color="whiteAlpha.700" lineHeight="22px" fontSize="sm">
                      The entire internet, fit in a dot.
                    </Text>
                  }
                />
            </Wrap>
          </Flex>
        </Flex>
      </Flex>

    </>
  )
}
