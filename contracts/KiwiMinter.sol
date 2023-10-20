// SPDX-License-Identifier: SEE LICENSE IN LICENSE
pragma solidity ^0.8.20;

import {ERC721URIStorage} from "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";

contract KiwiMinter is ERC721, ERC721URIStorage, Ownable {
    uint256 public tokenId;

    constructor(
        address initialOwner
    ) Ownable(initialOwner) ERC721("KiwiAvatar", "KIWA") {}

    function mint(
        address to,
        string memory _tokenURI
    ) public onlyOwner returns (uint256) {
        tokenId++;

        _safeMint(to, tokenId);
        _setTokenURI(tokenId, _tokenURI);

        return tokenId;
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(
        uint256 _tokenId
    ) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(_tokenId);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721, ERC721URIStorage) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
